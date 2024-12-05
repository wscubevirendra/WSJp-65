import React, { useEffect, useState } from 'react'

export default function App() {
  const [product, setProduct] = useState([]);
  
  const fetchProduct = async () => {
    const responce = await fetch("https://dummyjson.com/products")
    const data = await responce.json()
    setProduct(data.products)

  }

  useEffect(
    () => {
      fetchProduct()
    },
    []  //only render
  )

  return (
    <div className="container mt-5">
      <div className='row'>
        {
          product.map(
            (data, index) => {
              return (
                <div key={index} className="card col-3">
                  <img
                    src={data.thumbnail}
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">${data.price}</p>
                    <a href="#" className="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              )
            }
          )
        }


      </div>

    </div>
  )
}
