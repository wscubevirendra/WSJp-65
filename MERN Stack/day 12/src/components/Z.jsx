import React, { useContext } from 'react'
import { Maincontext } from './Context'
export default function Z() {
    const { count } = useContext(Maincontext)

    return (
        <div>
            Z--{count}

        </div>
    )
}
