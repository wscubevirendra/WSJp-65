import React, { useState } from "react";

function List(props) {
    const [count, setcount] = useState(0)
    const [toggle, settoggle] = useState(true)

    //useState(0)---default value
    //count=0
    //setcount()

    const toggleHandler = () => {
        settoggle(!toggle)
    }

    const incHandler = () => {
        setcount(count + 1)
    }

    const decHandler = () => {

        setcount(count - 1)

    }



    return (
        <div style={{ backgroundColor: toggle==true ? "red" : "green" }} className="card">
            <button onClick={toggleHandler}>
                {
                    toggle == true ? "on" : "off"
                }
            </button>
            <button disabled={count >= 10 ? true : false} onClick={incHandler}>+</button>
            <h1>{count}</h1>
            <h1>Rs:-{count * props.price}</h1>
            <button disabled={count == 0 ? true : false} onClick={decHandler}>-</button>
        </div>
    )
}


export default List;