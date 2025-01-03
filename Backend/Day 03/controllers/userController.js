const userModel = require("../models/userModel")


class userController {
    create(data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    const user = new userModel(
                        {
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            contact: data.contact,
                        }
                    )
                    user.save().then(
                        () => {
                            resolve(
                                {
                                    msg: "User Created Successfully",
                                    status: 1
                                }
                            )
                        }

                    ).catch(
                        (error) => {
                            reject(
                                {
                                    msg: "Unabled to create user",
                                    status: 0
                                }
                            )

                        }
                    )

                } catch (error) {
                    reject(
                        {
                            msg: "Internal Server Error",
                            status: 0
                        }
                    )

                }
            }
        )
    }

    get(userId) {
        return new Promise(
          async  (resolve, reject) => {
                try {
                   
                    let users;
                    if (userId) {
                        users = await userModel.findById(userId)
                    } else {
                        users = await userModel.find();
                    }
        
                    //user id---single data
                    //user id =null-- multiple data
                    resolve(
                        {
                            msg: "user found",
                            status: 1,
                            users
                        }
                    )
        
        
                } catch (error) {
                   
                    reject(
                        {
                            msg: "interenal server error",
                            status: 0
                        }
                    )
        
                }

            }
        )
    }


}

module.exports = userController