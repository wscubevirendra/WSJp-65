const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        },
        contact: {
            type: String,
            required: true,
            unique: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: Boolean,
            default: 0,
            //0--admin  1-superadmin
        },
        status: {
            type: Boolean,
            default: true,
        },

    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);




const adminModel = mongoose.model('Admin', AdminSchema);

module.exports = adminModel;
