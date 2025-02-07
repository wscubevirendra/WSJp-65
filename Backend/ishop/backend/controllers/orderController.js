require("dotenv").config()
const cartModel = require("../modules/CartModel");
const OrderModel = require("../modules/OrderModel");
const Razorpay = require('razorpay');
const crypto = require("crypto");

var RazorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_id,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

class orderController {
    orderPlace(order_data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const { user_id, order_total, payment_mode, shipping_details } = order_data

                    const cart = await cartModel.find({ user_id }).populate('product_id', '_id finalPrice');
                    const product_details = cart.map(
                        (cd) => {
                            return {
                                product_id: cd.product_id._id,
                                qty: cd.qty,
                                price: cd.product_id.finalPrice,
                                total: (cd.product_id.finalPrice * cd.qty)
                            }


                        }
                    )

                    const order = await new OrderModel({
                        user_id: user_id,
                        product_details: product_details,
                        order_total: order_total,
                        payment_mode: payment_mode,
                        shipping_details: shipping_details
                    })

                    order.save().then(
                        async () => {
                            await cartModel.deleteMany({ user_id })
                            if (payment_mode == 0) {
                                //COD
                                resolve(
                                    {
                                        msg: "Order place",
                                        status: 1,
                                        order_id: order._id
                                    }
                                )
                            } else {
                                this.intialPaymentGateWay(order._id, order_total).then(
                                    (razorpay_order) => {
                                        resolve(
                                            {
                                                msg: "Order place",
                                                status: 1,
                                                razorpay_order
                                            }
                                        )
                                    }
                                ).catch(
                                    () => {
                                        reject(
                                            {
                                                msg: "Order not place",
                                                status: 0
                                            }
                                        )
                                    }
                                )
                            }
                        }
                    ).catch(
                        () => {
                            reject(
                                {
                                    msg: "Order not place",
                                    status: 0

                                }
                            )
                        }
                    )

                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )

    }

    intialPaymentGateWay(order_id, order_total) {
        return new Promise(
            (resolve, reject) => {
                try {
                    var options = {
                        amount: order_total * 100,
                        currency: "INR",
                        receipt: order_id
                    };
                    RazorpayInstance.orders.create(options, async function (err, razorpay_order) {
                        if (err) {
                            reject(
                                {
                                    msg: "intialPaymentGateWay Errror",
                                    status: 0
                                }
                            )

                        } else {
                            await OrderModel.updateOne(
                                { _id: order_id },
                                {
                                    razorpay_order_id: razorpay_order.id
                                }
                            )
                            resolve(
                                {
                                    msg: "Order create",
                                    status: 1,
                                    order_id,
                                    razorpay_order: razorpay_order.id

                                }
                            )

                        }
                        console.log(razorpay_order);
                    });

                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )

    }

    async paymentSuccess(order_data) {
        return new Promise(async (resolve, reject) => {
            try {
                const { order_id, user_id, razorpay_response } = order_data;

                // Create data string for signature verification
                const data = `${razorpay_response.razorpay_order_id}|${razorpay_response.razorpay_payment_id}`;

                // Generate HMAC-SHA256 signature using secret key
                const generatedSignature = crypto
                    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                    .update(data)
                    .digest('hex');

                // Compare signatures
                if (generatedSignature === razorpay_response.razorpay_signature) {
                    await cartModel.deleteMany({ user_id });

                    // ✅ Fix: Query using `razorpay_order_id`, NOT `_id`
                    await OrderModel.updateOne(
                        { razorpay_order_id: razorpay_response.razorpay_order_id },
                        {
                            razorpay_payment_id: razorpay_response.razorpay_payment_id,
                            order_status: 1
                        }
                    );

                    resolve({ status: 1, msg: 'Order placed' });
                } else {
                    reject({ status: 0, msg: 'Payment verification failed' });
                }
            } catch (error) {
                console.log(error);
                reject({ msg: "Internal server error", status: 0 });
            }
        });
    }
}



module.exports = orderController