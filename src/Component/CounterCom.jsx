import React from 'react'
import { increment,decrement } from '../Redux/Slice/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

function CounterCom() {
const counter = useSelector( state => state.counter.value)
const dispatch = useDispatch()

  return (
 <>
    <h1>CounterReducer</h1>
    <h1> counter :{counter}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
 </>
  )
}

export default CounterCom