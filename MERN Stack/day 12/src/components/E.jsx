import React, { useContext } from 'react'
import { Maincontext } from './Context'

export default function E() {
    const { SetCount, count } = useContext(Maincontext)
    return (
        <div>E
            <button onClick={() => SetCount(count + 1)}>+</button>
        </div>
    )
}
