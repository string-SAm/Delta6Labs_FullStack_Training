import { createSlice } from '@reduxjs/toolkit'

// const initialState={
//     todo:[],
//     loading:false
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },

    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        increaseByAmount: (state) => {
            state.value -= 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer