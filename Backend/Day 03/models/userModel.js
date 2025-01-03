const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100
        },
        email: {
            type: String,
            unique: true
        },
        contact: {
            type: String,
            default: null
        },
        password: {
            type: String,

        },
        status: {
            type: Boolean,
            default: true   //true -activated  false-De-activ
        }
    },
    {
        timestamps: true
    }
)

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;