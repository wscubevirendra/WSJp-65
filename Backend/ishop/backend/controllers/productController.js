const { generateUniqueImageName } = require('../helper');
const ProductModel = require('../modules/productModel');
const { unlinkSync } = require('fs');

class productController {

    get(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let products = null;
                    if (id == null) {
                        products = await ProductModel.find();

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
}

module.exports = productController;