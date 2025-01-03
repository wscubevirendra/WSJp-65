const express = require("express");
const userController = require("../controllers/userController")
const userRouter = express.Router();

userRouter.post(
    "/register",
    (req, res) => {
        const result = new userController.create(req.body)
        result.then(
            (succes) => {
                res.send(succes)
            }
        ).catch(
            (error) => {
                res.send(error)

            }
        )

    }
)

userRouter.get(
    "/:id?",
    (req, res) => {
        const result = new userController.get(req.params.id)
        result.then(
            (succes) => {
                res.send(succes)
            }
        ).catch(
            (error) => {
                res.send(error)

            }
        )
    }
)

userRouter.put(
    "/update/:id",
    (req, res) => {

    }
)

