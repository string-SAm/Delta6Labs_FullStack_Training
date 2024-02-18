//We will setup redux without react

const {createStore}=require('redux') //to strore all the saved state value of App

//Reducer Func
const counterReducer=(state={count:0},action)=>{
        //Reducer funcn take 2 args, initial value and type of action

    switch(action.type){ //action are always in capial letter
        case 'INCREMENT':
            return {count:state.count+1}

        case 'DECREMENT':
            return {count:state.count-1}
        default:
            return state
    }

}
//Create redux stoore
const store=createStore(counterReducer) //srtore object act as global object

//subscribe to state change

store.subscribe(()=>{
    console.log('current state',store.getState());
})

//Dispatch action

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})