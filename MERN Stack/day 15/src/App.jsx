import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/features/counter'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const disptach = useDispatch()
  return (
    <div className='card'>
      <button onClick={() => disptach(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => disptach(decrement())}>-</button>
    </div>
  )
}
