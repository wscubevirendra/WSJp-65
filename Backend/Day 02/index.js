const fs = require("fs");

// fs.writeFileSync("first.txt", "my first file create using node js")
// const result = fs.readFileSync("first.txt","utf-8");
// console.log(result)
// fs.unlinkSync("first.txt")


// fs.writeFile("first.txt", "my fiest file using asyn-writefile proces", (err) => {
//     if (err) {
//         console.log(err)

//     } else {
//         console.log('File created successfully')
//     }
// })

// fs.readFile("first.txt", "utf-8", (err, result) => {
//     if (!err) {
//         console.log(result)
//     }
// })

// fs.unlink("first.txt", (err) => {
// if(err){
// console.log(err)
// }else{
// console.log("File delete succesfully")
// }
// })

// fs.mkdirSync("images")

fs.writeFileSync("data/index.txt","Hello")