import React from 'react'
import { Provider } from 'react-redux'
// import Counter from './components/Redux/Counter'
// //import store from './components/Redux/Stores/counterStore'
// import Counter1 from './components/Redux/Counter1'

//import Slice from './components/Redux/Slice/Slice'
import ReduxThunkjs from './components/Redux/reduxThunk/ReduxThunkjs'
import ReduxThunkApi from './components/Redux/reduxThunkApi/ReduxThunkApi'
import PostForm from './components/PostForm'
import store from './components/Redux/Stores/postStore'
import PostList from './components/PostList'
import UseEffects from './components/Redux/UseEffect'
import Pagination from './components/Pagination'
import WebSocket from './components/WebSocket'
import UseEffExample from './components/Redux/UseEffectExample'
import UseReducerCounter from './components/UseReducer'
import UseReducerTodoList from './components/UseReducer'
import CustomHook from './components/CustomHook'
import UseRefCounter from './components/UseRef'


function App() {
  return (
    <>
      <UseRefCounter/>
    </>
    // <Provider store={store}>
    
    //   <div>
     
    //   <PostForm/>   
    //   <hr/>
    //   <PostList/> 
    //   </div>
    // </Provider>
  )
}

export default App


// import React from 'react';
// import UserInfo, { ThemeProvider, UserProvider, useTheme, useUser } from './components/Redux/NestedContext';

// function App() {
//   // Use the useTheme and useUser hooks within the App component
 
//   return (
//     <UserProvider>
//       <ThemeProvider>
//         {/* Wrap the content within the ThemeProvider and UserProvider */}
//         <div>
//           <UserInfo />
          
//         </div>
//       </ThemeProvider>
//     </UserProvider>
//   );
// }

// export default App;


// // import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Form from './components/Form';
// // import { ChakraProvider } from '@chakra-ui/react'
// // import ControlledForm from './test-components/ControlledForm';
// // import FormExample from './components/FormExample';
// // import RenderProps from './components/RenderProps';
// // import Hoc from './components/Hoc';
// // import ToggleScreen from './components/ToggleScreen';
// // import UserProfile from './components/UserProfile';
// // import Home from './components/Home';
// // import { ThemeProvider } from './components/12Feb/ThemeContext';
// // import Header from './components/12Feb/Header';
// // import Content from './components/12Feb/Content';



// // class App extends Component {
// //   render() {
// //     return (
// // <ThemeProvider>
// //       <Router>
// //         <Routes>
// //         <Route path='/' exact element={<Home/>}/>
// //         <Route path='/user'  element={<UserProfile/>}/>
        
// //         <Route path='/Header' exact element={<Header/>}/>
// //         <Route path='/Content'  element={<Content/>}/>
        
// //         </Routes>
// //       </Router>
// //       {/* <Header/>
// //       <Content/> */}
// //       </ThemeProvider>
// //     );
// //   }
// // }

// // export default App;
