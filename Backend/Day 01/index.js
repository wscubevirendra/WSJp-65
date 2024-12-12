const http = require("http");
const url = require("url")

//http://localhost:5000/contact?name=%22vipul%22&email=%22vipul@gmail.com%22

//http://localhost:5000----domain
///contact---path
//?name=%22vipul%22&email=%22vipul@gmail.com%22  query --string

const user = [
    {
        name: "vipul",
        email: "vipul@gmail.com"
    },
    {
        name: "amit",
        email: "amit@gmail.com"
    },
    {
        name: "neha",
        email: "neha@gmail.com"
    },
    {
        name: "rohit",
        email: "rohit@gmail.com"
    }
]

const products = [
    {
        id: 1,
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        stock: 50,
        rating: 4.5
    },
    {
        id: 2,
        name: "Laptop",
        price: 1299.99,
        category: "Electronics",
        stock: 30,
        rating: 4.8
    },
    {
        id: 3,
        name: "Headphones",
        price: 199.99,
        category: "Accessories",
        stock: 100,
        rating: 4.2
    },
    {
        id: 4,
        name: "Running Shoes",
        price: 89.99,
        category: "Footwear",
        stock: 200,
        rating: 4.7
    },
    {
        id: 5,
        name: "Water Bottle",
        price: 15.99,
        category: "Home Essentials",
        stock: 500,
        rating: 4.3
    }
];

const categories = [
    {
        id: 1,
        name: "Electronics",
        description: "Devices and gadgets like smartphones, laptops, and accessories."
    },
    {
        id: 2,
        name: "Footwear",
        description: "Shoes, sandals, and other types of footwear."
    },
    {
        id: 3,
        name: "Home Essentials",
        description: "Everyday items like water bottles, cleaning supplies, and decor."
    },
    {
        id: 4,
        name: "Clothing",
        description: "Apparel including shirts, pants, and dresses."
    },
    {
        id: 5,
        name: "Accessories",
        description: "Items like headphones, watches, and jewelry."
    }
];







const server = http.createServer(
    (req, res) => {
        const parsedUrl = url.parse(req.url, true)
        if (parsedUrl.pathname == "/user") {
            res.end(JSON.stringify(user))
        } else if (parsedUrl.pathname == "/products") {
            res.end(JSON.stringify(products))
        } else if (parsedUrl.pathname == "/categories") {
            res.end(JSON.stringify(categories))
        }else{
            res.end("Data not found")
        }
    }
)

server.listen(
    5000,
    () => {
        console.log('Server started')
    }
)