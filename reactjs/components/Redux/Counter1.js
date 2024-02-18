import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './Action/Action';

//useDispatch is used to an action into the base 

const Counter1 = (() => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={() => {
                dispatch(increment())
            }}>INCREMENT</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>DECREMENT</button>
        </div>
    )
})

export default Counter1