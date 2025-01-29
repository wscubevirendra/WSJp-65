const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');
const fileUpload = require("express-fileupload")




productRouter.get("/:id?", (req, res) => {
   console.log(req.query)
    const result = new productController().get(req.params.id, req.query)
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


productRouter.post("/create", fileUpload(
    {
        createParentPath: true
    }
), (req, res) => {

    const result = new productController().create(req.body, req.files.thumbnail);
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

productRouter.patch("/status-update", (req, res) => {
    const result = new productController().status(req.body.id, req.body.flag)
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


productRouter.post("/multiple-images/:id", fileUpload(
    {
        createParentPath: true
    }
), (req, res) => {


    const result = new productController().multipleImage(req.params.id, req.files.images);
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