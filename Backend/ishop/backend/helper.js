const generateUniqueImageName = (image) => {
    return Math.floor(Math.random() * 10000) + new Date().getTime() + image
}


module.exports = { generateUniqueImageName }