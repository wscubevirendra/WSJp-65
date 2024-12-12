const express = require("express");
const mongoose = require("mongoose")
const server = express();
server.use(express.json())

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100
        },
        email: {
            type: String,
            unique: true
        },
        contact: {
            type: String,
            default: null
        },
        password: {
            type: String,

        },
        status: {
            type: Boolean,
            default: true   //true -activated  false-De-activ
        }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model("Users", userSchema)

server.post(
    "/user/register",
    (req, res) => {
        try {
            const user = new userModel(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.pass,
                    contact: req.body.contact,
                }
            )
            user.save().then(
                () => {
                    res.send(
                        {
                            msg: "User Created Successfully",
                            status: 1
                        }
                    )
                }

            ).catch(
                (error) => {
                    console.log(error)
                    res.send(
                        {
                            msg: "Unabled to create user",
                            status: 0
                        }
                    )

                }
            )

        } catch (error) {
            res.send(
                {
                    msg: "Internal Server Error",
                    status: 0
                }
            )

        }
    }
)



mongoose.connect("mongodb://localhost:27017/",
    { dbName: "Wsjp65" }
).then(
    () => {
        console.log('DB connected')
        server.listen(
            5000,
            () => {
                console.log("Server started")
            }
        )
    }

).catch(
    () => {
        console.log("DB not connected")
    }
)





