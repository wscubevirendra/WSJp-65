const express = require('express');
const adminRouter = express.Router();
const adminController = require('../controllers/adminController');


adminRouter.post("/register", (req, res) => {
    const result = new adminController().register(req.body);
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


adminRouter.post("/login", (req, res) => {
    const result = new adminController().login(req.body);
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



module.exports = adminRouter;