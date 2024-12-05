import React, { createContext, useState } from 'react'
const Maincontext = createContext()


function Context(props) {
    const [count, SetCount] = useState(0)
    return (
        <Maincontext.Provider value={{ count, SetCount }}>
            {props.children}
        </Maincontext.Provider>
    )
}



export default Context

export { Maincontext }

