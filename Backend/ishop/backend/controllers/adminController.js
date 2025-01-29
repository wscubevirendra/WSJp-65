const { encryptedPassword, decryptedPassword, generateToken } = require("../helper")
const adminModel = require("../modules/adminMOdel")

class adminController {
    register(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    if (!data.name || !data.email || !data.contact || !data.password) {
                        reject(
                            {
                                msg: "Please provide all required fields",
                                status: 0
                            }
                        )
                        return
                    }

                    const adminCheck = await adminModel.findOne({
                        $or: [
                            { email: data.email },
                            { contact: data.contact }
                        ]
                    })

                    if (adminCheck) {
                        reject(
                            {
                                msg: "This Email and Contact already exit",
                                status: 0
                            }
                        )

                    } else {
                        const admin = new adminModel({
                            name: data.name,
                            email: data.email,
                            contact: data.contact,
                            password: encryptedPassword(data.password)
                        })

                        admin.save().then(
                            () => {
                                resolve(
                                    {
                                        msg: "Admin created",
                                        status: 1
                                    }
                                )

                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to create admin",
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

                    const admin = await adminModel.findOne({ email: data.email })

                    if (admin) {
                        if (data.password == decryptedPassword(admin.password)) {
                            resolve(
                                {
                                    msg: "Login succesfully",
                                    status: 1,
                                    admin: { ...admin.toJSON(), password: null },
                                    token: generateToken(admin.toJSON())
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
}

module.exports = adminController