import React, { useReducer, useState } from 'react';
 
//const initialState = [];
 
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error();
  }
}
 
function UseReducerTodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');
 
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'add', payload: text });
    setText('');
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default UseReducerTodoList;

//Counting Example

// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     case 'reset':
//       return { count: 0 };
//     default:
//       throw new Error();
//   }
// }

// function UseReducerCounter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//     </div>
//   );
// }

// export default UseReducerCounter;

//Authentiation Of Register and Login

// import React, { useReducer } from 'react';
 
// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   error: null,
// };
 
// function reducer(state, action) {
//   switch (action.type) {
//     case 'login':
//       return {
//         isAuthenticated: true,
//         user: action.payload,
//         error: null,
//       };
//     case 'logout':
//       return {
//         isAuthenticated: false,
//         user: null,
//         error: null,
//       };
//     case 'setError':
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       throw new Error();
//   }
// }
 
// function Auth() {
//   const [state, dispatch] = useReducer(reducer, initialState);
 
//   const handleLogin = () => {
//     // Simulating async login
//     setTimeout(() => {
//       const user = { username: 'exampleUser' }; // mock user object
//       dispatch({ type: 'login', payload: user });
//     }, 1000);
//   };
 
//   const handleLogout = () => {
//     dispatch({ type: 'logout' });
//   };
 
//   return (
//     <div>
//       {state.isAuthenticated ? (
//         <div>
//           <p>Welcome, {state.user.username}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <p>Please login</p>
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//       {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
//     </div>
//   );
// }
 
// export default Auth;