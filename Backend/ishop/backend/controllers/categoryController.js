const categoryModel = require('../modules/categoryModel');

class categoryController {
    createCategory(data) {
        return new Promise((resolve, reject) => {
            try {
                if (!data.name || !data.slug) {
                    reject(
                        {
                            msg: "Please provide all required fields",
                            status: 0
                        }
                    )
                    return
                }
                const category = new categoryModel({
                    name: data.name,
                    slug: data.slug
                })

                category.save().then(
                    () => {
                        resolve(
                            {
                                msg: "Category created",
                                status: 1
                            }
                        )
                    }
                ).catch(
                    () => {
                        reject(
                            {
                                msg: "Unable to create category",
                                status: 0
                            }
                        )

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

    getCategory(id) {
        console.log(id, "my-id")
        return new Promise(
            async (resolve, reject) => {
                try {
                    let category = null;
                    if (id == null) {
                        category = await categoryModel.find();

                    } else {
                        category = await categoryModel.findById(id);

                    }
                    console.log(category)

                    if (category) {
                        resolve(
                            {
                                msg: "Category find",
                                status: 1,
                                category: category
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Unable to find category",
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

    status(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const category = await categoryModel.findById(id);
                    if (category) {
                        categoryModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    status: !category.status
                                }
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
}

module.exports = categoryController;