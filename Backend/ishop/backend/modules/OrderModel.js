const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a schema for product details
const productDetailsSchema = new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
}, { _id: false });

// Define a schema for shipping details
const shippingDetailsSchema = new Schema({
    name: { type: String, required: true },
    contact: { type: String, require: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
}, { _id: false });

// Define the main order schema
const orderSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_details: { type: [productDetailsSchema], required: true },
    order_total: { type: Number, required: true },
    payment_mode: { type: Boolean, required: true }, // 1 for prepaid, 0 for COD
    razorpay_order_id: { type: String, default: null },
    razorpay_payment_id: { type: String, default: null },
    order_status: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6, 7],
        default: 0 // order placed
    }, // Assuming 0 to 7 are different status codes
    shipping_details: { type: shippingDetailsSchema, required: true }
}, { timestamps: true });

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;