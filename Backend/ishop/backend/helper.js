require("dotenv").config()
var jwt = require('jsonwebtoken');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);

const generateUniqueImageName = (image) => {
    return Math.floor(Math.random() * 10000) + new Date().getTime() + image
}


const encryptedPassword = (value) => cryptr.encrypt(value);
const decryptedPassword = (value) => cryptr.decrypt(value);


//create token
const generateToken = (user) => {
    return jwt.sign(user, process.env.SECRET_KEY)
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY)
}





module.exports = { generateUniqueImageName, encryptedPassword, decryptedPassword, generateToken, verifyToken }