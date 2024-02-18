
const {createStore} = require('redux');

const ADD_TODO = 'ADD_TODO'; // action must be capital letter
const TOGGLE_TODO = 'TOGGLE_TODO';
 
// Define Redux action creators
let nextTododId =0;
const addTodo = text =>({
    type: ADD_TODO,
    id: nextTododId++,
    text
});
 
const toogleTodo = id =>(
    {
        type: TOGGLE_TODO,
        id
    }
);
 
// Reducer function
const todosReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false
            }];
 
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed}:todo);
        default:
            return state;
 
    }
}
 
const store = createStore(todosReducer);
 
 
store.subscribe(()=>{
    console.log('current Todos:',store.getState()); // will recieve all the todos items
})
 
// Dispatch actions
store.dispatch(addTodo('Eat'))
store.dispatch(addTodo('Sleep'))
store.dispatch(toogleTodo(0))