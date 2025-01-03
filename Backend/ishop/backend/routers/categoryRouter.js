const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');


categoryRouter.post("/create", (req, res) => {
    const result = new categoryController().createCategory(req.body);
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

categoryRouter.get("/:id?", (req, res) => {
    const result = new categoryController().getCategory(req.params.id)
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

categoryRouter.patch("/status/:id", (req, res) => {
    const result = new categoryController().status(req.params.id);
    result.then((success) => res.send(success))
        .catch((error) => res.send(error))
})

module.exports = categoryRouter;