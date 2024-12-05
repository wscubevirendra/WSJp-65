import React from 'react'

export default function Input({ setSearch }) {

    return (
        <input onKeyUp={(e) => setSearch(e.target.value)} type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder='Movie Search kro.....' />
    )
}
