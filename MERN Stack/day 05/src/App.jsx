import React, { useState } from 'react'
import Input from './Input'
import Display from './Display'

export default function App() {
  const [item, setItem] = useState([]);

  const getItem = (e) => {
    if (e.target.value != "") {
      if (e.key == "Enter") {
        setItem([...item, e.target.value])
      }
    }

  }

  const deleteItem = (index) => {
    const newItem = item.filter(
      (d, i) => {
        return index == i ? false : true
      }
    )

    setItem(newItem)

  }



  return (
    <div className='w-50 mx-auto border'>
      <Input getItem={getItem} />
      <Display items={item} deleteItem={deleteItem} />
    </div>
  )
}
