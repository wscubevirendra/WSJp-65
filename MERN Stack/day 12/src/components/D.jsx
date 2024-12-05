import React, { useContext } from 'react'
import E from './E'
import { Maincontext } from './Context'

export default function D() {
    const { count } = useContext(Maincontext)
    return (
        <div>D---{count}
            <E />
        </div>
    )
}
