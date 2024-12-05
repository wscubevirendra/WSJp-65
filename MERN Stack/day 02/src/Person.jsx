import React from "react";

function Person(props) {
    console.log(props)
    return (

        <div className="card">
            <img width={100} src={props.poster} alt="" />
            <h2>Name:{props.name}</h2>
            <h2>Age:{props.age}</h2>
            <h2>city:{props.city}</h2>
        </div>

    )
}

export default Person