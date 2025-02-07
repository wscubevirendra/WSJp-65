const { encryptedPassword, decryptedPassword, generateToken } = require("../helper");
const cartModel = require("../modules/CartModel");
const userModel = require("../modules/userModel");

class userController {
    register(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    if (!data.name || !data.email || !data.contact || !data.password || !data.confirmPassword) {
                        reject(
                            {
                                msg: "Please provide all required fields",
                                status: 0
                            }
                        )
                        return
                    }
                    if (data.password != data.confirmPassword) {
                        reject(
                            {
                                msg: "Passwords do not match",
                                status: 0
                            }
                        )
                        return

                    }

                    const userCheck = await userModel.findOne({
                        $or: [
                            { email: data.email },
                            { contact: data.contact }
                        ]
                    })

                    if (userCheck) {
                        reject(
                            {
                                msg: "This Email and Contact already exit",
                                status: 0
                            }
                        )

                    } else {
                        const user = new userModel({
                            name: data.name,
                            email: data.email,
                            contact: data.contact,
                            password: encryptedPassword(data.password)
                        })

                        user.save().then(
                            () => {
                                const token = generateToken(user.toJSON())
                                resolve(
                                    {
                                        msg: "User created",
                                        status: 1,
                                        user: { ...user.toJSON(), password: null },
                                        token
                                    }
                                )

                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to create user",
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


    login(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    if (!data.email || !data.password) {
                        reject(
                            {
                                msg: "Please provide all required fields",
                                status: 0
                            }
                        )
                        return
                    }

                    const user = await userModel.findOne({ email: data.email })

                    if (user) {
                        if (data.password == decryptedPassword(user.password)) {
                            resolve(
                                {
                                    msg: "Login succesfully",
                                    status: 1,
                                    user: { ...user.toJSON(), password: null },
                                    token: generateToken(user.toJSON())
                                }
                            )

                        } else {
                            reject(
                                {
                                    msg: "Incorrect password",
                                    status: 0
                                }
                            )
                        }

                    } else {
                        reject(
                            {
                                msg: "Account not exit's",
                                status: 0
                            }
                        )

                    }

                } catch (error) {
                    console.log(error)
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

    moveToDB(userId, data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const cartData = data ? JSON.parse(data.cartData) : null;
                    if (cartData != null) {
                        const allPromise = cartData.map(
                            async (cd) => {
                                const d = await cartModel.findOne({ user_id: userId, product_id: cd.productId })

                                if (d) {
                                    //qty increase
                                    await cartModel.updateOne(
                                        { _id: d._id },
                                        {
                                            $inc: {
                                                qty: Number(cd.qty)
                                            }
                                        }
                                    )

                                } else {
                                    new cartModel({
                                        user_id: userId,
                                        product_id: cd.productId,
                                        qty: cd.qty
                                    }).save()

                                }

                            }
                        )

                        await Promise.all(allPromise)
                        const dbCartData = await cartModel.find({ user_id: userId }).populate('product_id', '_id originalPrice finalPrice')
                        resolve(
                            {
                                msg: "move to DB",
                                status: 1,
                                dbCartData
                            }
                        )
                    } else {
                        const dbCartData = await cartModel.find({ user_id: userId }).populate('product_id', '_id originalPrice finalPrice')
                        resolve(
                            {
                                status: 1,
                                dbCartData
                            }
                        )

                    }

                } catch (error) {
                    console.log(error)
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

    addToCart(cd) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const d = await cartModel.findOne({ user_id: cd.userId, product_id: cd.productId })

                    if (d) {
                        //qty increase
                        await cartModel.updateOne(
                            { _id: d._id },
                            {
                                $inc: {
                                    qty: 1
                                }
                            }
                        )

                    } else {
                        new cartModel({
                            user_id: cd.userId,
                            product_id: cd.productId,
                            qty: 1
                        }).save()

                    }

                } catch (error) {
                    console.log(error)
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

module.exports = userController