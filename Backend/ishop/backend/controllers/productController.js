const { generateUniqueImageName } = require('../helper');
const ProductModel = require('../modules/productModel');
const categoryModel = require('../modules/categoryModel');
const { unlinkSync } = require('fs');

class productController {

    get(id, query) {
        return new Promise(
            async (resolve, reject) => {
                try {

                    const filterQuery = {};
                    if (query.categorySlug != "null") {
                        const category = await categoryModel.findOne({ slug: query.categorySlug })
                        if (category) {
                            filterQuery["categoryId"] = category._id
                        }
                    }

                    if (query.productColor != "null") {
                        filterQuery["colors"] = query.productColor
                    }

                    let products = null;
                    if (id == null) {
                        products = await ProductModel.find(filterQuery).populate(["categoryId", "colors"]).limit(query.limit)

                    } else {
                        products = await ProductModel.findById(id);

                    }


                    if (products) {
                        resolve(
                            {
                                msg: "Product find",
                                status: 1,
                                product: products
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Unable to find product",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )

                }
            }
        )

    }

    create(data, thumbnail) {
        return new Promise((resolve, reject) => {
            try {
                if (!data.name || !data.slug || !thumbnail) {
                    reject(
                        {
                            msg: "Please provide all required fields",
                            status: 0
                        }
                    )
                    return
                }
                const main_img = generateUniqueImageName(thumbnail.name)
                const destination = './public/product/' + main_img

                thumbnail.mv(
                    destination,
                    (err) => {
                        if (err) {
                            reject(
                                {
                                    msg: "Unable to upload thumbnail",
                                    status: 0
                                }
                            )
                        } else {

                            const product = new ProductModel({
                                ...data,
                                colors: JSON.parse(data.colors),
                                thumbnail: main_img
                            })

                            product.save().then(
                                () => {
                                    resolve(
                                        {
                                            msg: "Product created",
                                            status: 1
                                        }
                                    )
                                }
                            ).catch(
                                (err) => {
                                    console.log(err)
                                    reject(
                                        {
                                            msg: "Unable to create product",
                                            status: 0
                                        }
                                    )

                                }
                            )


                        }


                    }
                )


            } catch (error) {
                reject(
                    {
                        msg: "Internal server error",
                        status: 0
                    }
                )
            }
        })
    }


    status(id, flag) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const productStatus = {};
                    //  topSelling = false
                    const product = await ProductModel.findById(id);
                    if (product) {
                        if (flag == 1) {
                            productStatus.status = !product.status
                        } else if (flag == 2) {
                            productStatus.stock = !product.stock

                        } else if (flag == 3) {
                            productStatus.topSelling = !product.topSelling

                        }


                        ProductModel.updateOne(
                            { _id: id },
                            {
                                $set: productStatus
                            }
                        ).then(
                            () => {
                                resolve(
                                    {
                                        msg: "Status updated",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to update status",
                                        status: 0
                                    }
                                )
                            }
                        )

                    }


                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )

    }

    multipleImage(id, productimages) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const Allimages = Array.isArray(productimages) ? productimages : [productimages]

                    const product = await ProductModel.findById(id);
                    if (product) {
                        const currentProdImages = product.images ?? [];
                        const PromiseUpload = [];
                        if (Allimages != 0) {
                            for (let image of Allimages) {
                                const name = generateUniqueImageName(image.name);
                                const desti = "./public/product/" + name
                                currentProdImages.push(name);
                                PromiseUpload.push(image.mv(desti))
                            }

                            await Promise.all(PromiseUpload)
                            ProductModel.updateOne(
                                {
                                    _id: id
                                },
                                {
                                    $set: {
                                        images: currentProdImages
                                    }
                                }

                            ).then(
                                () => {
                                    resolve(
                                        {
                                            msg: "Product images add",
                                            status: 1
                                        }
                                    )
                                }
                            ).catch(
                                () => {
                                    reject(
                                        {
                                            msg: "Unable to add image",
                                            status: 0
                                        }
                                    )
                                }
                            )

                        }

                    } else {
                        reject(
                            {
                                msg: "Product not found",
                                status: 0
                            }
                        )

                    }

                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )

    }



}

module.exports = productController;