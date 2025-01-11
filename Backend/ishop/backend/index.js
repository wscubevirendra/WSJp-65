const express = require('express');
const mongoose = require('mongoose');
const categoryRouter = require('./routers/categoryRouter');
const cors = require('cors');
const colorRouter = require('./routers/colorRouter');
const productRouter = require('./routers/productRouter');
const server = express();
server.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));


server.use(express.json());
server.use(express.static("public"));
server.use("/category", categoryRouter);
server.use("/color", colorRouter);
server.use("/product", productRouter);


mongoose.connect("mongodb://localhost:27017/", {
    dbName: "ishop"
}).then(
    () => {
        console.log('Database is connected')
        server.listen(
            5000,
            () => {
                console.log('Server is running on http://localhost:5000')
            }
        )
    }
).catch(
    (err) => {
        console.log("Error in database connection", err)
    }
)

