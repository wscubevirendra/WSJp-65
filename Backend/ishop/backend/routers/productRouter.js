const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');



productRouter.get("/:id?", (req, res) => {
    const result = new productController().get(req.params.id)
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



module.exports = productRouter;