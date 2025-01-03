const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json())
const userRouter=require("./routers/userRouter")
server.use(cors({
    origin: ["http://localhost:5173", "https://www.wscubetech.com"]
}))

server.use("/user",userRouter)





// server.post(
//     "/user/login",
//     async (req, res) => {
//         try {
//             const user = await userModel.findOne({ email: req.body.email });
//             if (user) {
//                 if (user.password === req.body.password) {
//                     res.send(
//                         {
//                             msg: "user login succesfully",
//                             status: 1
//                         }
//                     )

//                 } else {
//                     res.send(
//                         {
//                             msg: "Password do'es match",
//                             status: 0
//                         }
//                     )

//                 }

//             } else {
//                 res.send(
//                     {
//                         msg: "unabled to find accound",
//                         status: 0
//                     }
//                 )
//             }

//         } catch (error) {
//             res.send(
//                 {
//                     msg: "Internal server error",
//                     status: 0
//                 }
//             )
//         }
//     }
// )


// server.delete(
//     "/user/delete/:id",
//     async (req, res) => {
//         try {
//             const user = await userModel.findById(req.params.id);
//             if (user) {
//                 userModel.deleteOne({ _id: req.params.id }).then(
//                     () => {
//                         res.send(
//                             {
//                                 msg: "user deleted",
//                                 status: 1
//                             }
//                         )
//                     }
//                 ).catch(
//                     () => {
//                         res.send(
//                             {
//                                 msg: "unabled to  delete user",
//                                 status: 0
//                             }
//                         )
//                     }
//                 )
//             } else {
//                 res.send(
//                     {
//                         msg: "user not exist",
//                         status: 0
//                     }
//                 )
//             }


//         } catch (error) {
//             res.send(
//                 {
//                     msg: "interenal server error",
//                     status: 0
//                 }
//             )
//         }
//     }
// )

// server.patch(
//     "/user/status-update/:id",
//     async (req, res) => {
//         try {
//             const id = req.params.id;
//             const user = await userModel.findById(id);
//             console.log(user)
//             if (user) {
//                 userModel.updateOne(
//                     { _id: id },
//                     { status: !user.status }
//                 ).then(
//                     () => {
//                         res.send({
//                             msg: "user status update",
//                             status: 1
//                         })
//                     }
//                 ).catch(
//                     () => {
//                         res.send(
//                             {
//                                 msg: "unable to update status",
//                                 status: 0
//                             }
//                         )

//                     }
//                 )

//             } else {
//                 res.send(
//                     {
//                         msg: "user not exist",
//                         status: 0
//                     }
//                 )

//             }

//         } catch (error) {
//             res.send(
//                 {
//                     msg: "internal server error",
//                     status: 0
//                 }
//             )
//         }
//     }
// )

// server.put(
//     "/user/update/:id",
//     async (req, res) => {
//         try {
//             const id = req.params.id;
//             const user = await userModel.findById(id);
//             if (user) {
//                 //if user found
//                 userModel.updateOne(
//                     { _id: id },
//                     {
//                         ...req.body

//                         // "name":"vipul tiwari",
//                         // "email":"viput23@gmail.com"

//                     }
//                 ).then(
//                     () => {
//                         res.send(
//                             {
//                                 msg: "user data update",
//                                 status: 1
//                             }
//                         )
//                     }
//                 ).catch(
//                     () => {
//                         res.send(
//                             {
//                                 msg: "unable to update user",
//                                 status: 0
//                             }
//                         )
//                     }
//                 )

//             } else {
//                 res.send(
//                     {
//                         msg: "user not exits"
//                     }
//                 )
//             }

//         } catch (error) {
//             res.send(
//                 {
//                     msg: "internal server error",
//                     status: 0
//                 }
//             )
//         }
//     }
// )






mongoose.connect("mongodb://localhost:27017/",
    { dbName: "Wsjp65" }
).then(
    () => {
        console.log('DB connected')
        server.listen(
            5000,
            () => {
                console.log("Server started")
            }
        )
    }

).catch(
    () => {
        console.log("DB not connected")
    }
)





