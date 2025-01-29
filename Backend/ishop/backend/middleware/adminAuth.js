const { verifyToken } = require("../helper")

const adminAuth = (req, res, next) => {
    try {
        const admintoken = req?.headers?.authorization
        if (admintoken) {
            if (verifyToken(admintoken)) {
                next()  //apko jo bhi kaam kro
            } else {
                res.send(
                    {
                        msg: "Invalid Access Token ",
                        status: 0
                    }
                )
            }
    
        } else {
            res.send(
                {
                    msg: "Access Token Missing",
                    status: 0
                }
            )
    
        }
    } catch (error) {
        console.log(error)
        
    }
  
}

module.exports = adminAuth