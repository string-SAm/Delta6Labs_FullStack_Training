import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './sliceAction'

const Slice=(()=>{
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => {
                dispatch(increment())
            }}>INCREMENT</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>DECREMENT</button>
        </div>
    )
    
})

export default Slice
