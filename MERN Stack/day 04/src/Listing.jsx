import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoHeartDislike } from "react-icons/io5";


import data from "./data";


function Listing() {
  

    return (
        <>
            <h1 className="h1 my-2">Listing</h1>
            <hr />
            <div className="container-fluid border w-full p-2 ">
                <div className="row ">
                    {
                        data.map(
                            (d, i) => {
                                return (
                                    <Mycard key={i} image={d.image} name={d.name}  />
                                )
                            }
                        )
                    }
                </div>


            </div>
        </>
    )
}


const Mycard = (props) => {
    const [toggle, setoggle] = useState(true)

    const toggleHandler = () => {
        setoggle(!toggle)
    }
    return (
        <div class="card col-3" >
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
            {
                toggle == true
                    ?
                    < IoMdHeart onClick={toggleHandler} className="fs-1 text-danger" />
                    :
                    <IoHeartDislike onClick={toggleHandler} className="fs-1 text-danger" />

            }
        </div>
    )
}

export default Listing