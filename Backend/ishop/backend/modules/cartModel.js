const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
            require: true
        },
        product_id: {
            type: mongoose.Schema.ObjectId,
            ref: "product",
            require: true
        },
        qty: {
            type: Number,
            min: 1,
            require: true,
            default: 1
        }

    },
    {
        timestamps: true
    }
)

const cartModel = mongoose.model("Cart", cartSchema)

module.exports = cartModel;