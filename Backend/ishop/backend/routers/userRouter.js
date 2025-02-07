const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');


userRouter.post("/register", (req, res) => {
    const result = new userController().register(req.body);
    result.then(
        (success) => {
            res.send(success);
        }

    ).catch(
        (error) => {
            res.send(error);
        }

    )

})


userRouter.post("/login", (req, res) => {
    const result = new userController().login(req.body);
    result.then(
        (success) => {
            res.send(success);
        }

    ).catch(
        (error) => {
            res.send(error);
        }

    )

})

userRouter.post("/move-to-db/:userId", (req, res) => {
    const result = new userController().moveToDB(req.params.userId, req.body);
    result.then(
        (success) => {
            res.send(success);
        }

    ).catch(
        (error) => {
            res.send(error);
        }

    )

})

userRouter.post("/add-to-cart", (req, res) => {
    const result = new userController().addToCart(req.body);
    result.then(
        (success) => {
            res.send(success);
        }

    ).catch(
        (error) => {
            res.send(error);
        }

    )

})



module.exports = userRouter;