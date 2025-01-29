const express = require('express');
const categoryRouter = express.Router();
const fileUpload = require("express-fileupload")
const categoryController = require('../controllers/categoryController');
const adminAuth = require('../middleware/adminAuth');
// categoryRouter.use(adminAuth)


categoryRouter.post("/create", [fileUpload(
    {
        createParentPath: true
    }
),
    adminAuth
]
    , (req, res) => {

        const result = new categoryController().create(req.body, req.files?.category_image);
        result.then(
            (success) => {
                res.send(success);
            }

        ).catch(
            (error) => {
                console.log(error)
                res.send(error);
            }

        )

    })

categoryRouter.get("/:id?", (req, res) => {
    const result = new categoryController().get(req.params.id)
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

categoryRouter.delete("/delete/:id", (req, res) => {

    const result = new categoryController().delete(req.params.id);
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

categoryRouter.put("/update/:id", fileUpload(
    {
        createParentPath: true
    }
), (req, res) => {
    const result = new categoryController().update(req.params.id, req.body, req.files?.category_image);
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


module.exports = categoryRouter;