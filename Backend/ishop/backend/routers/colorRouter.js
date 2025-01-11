const express = require('express');
const colorRouter = express.Router();
const colorController = require('../controllers/colorController');


colorRouter.post("/create", (req, res) => {
    const result = new colorController().create(req.body);
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

colorRouter.get("/:id?", (req, res) => {
    const result = new colorController().get(req.params.id)
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

colorRouter.patch("/status/:id", (req, res) => {
    const result = new colorController().status(req.params.id);
    result.then((success) => res.send(success))
        .catch((error) => res.send(error))
})

colorRouter.delete("/delete/:id", (req, res) => {
    const result = new colorController().delete(req.params.id);
    result.then(
        (success) => {
            res.send(success)
        }
    ).catch(
        (error) => {
            res.send(error)
        }
    )
})

colorRouter.put("/update/:id", (req, res) => {
    const result = new colorController().update(req.params.id, req.body);
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


module.exports = colorRouter;