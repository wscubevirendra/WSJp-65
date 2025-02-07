const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orderController');


orderRouter.post("/place-order", (req, res) => {
    const result = new orderController().orderPlace(req.body);
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


orderRouter.post("/payment-success", (req, res) => {
    const result = new orderController().paymentSuccess(req.body);
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





module.exports = orderRouter;