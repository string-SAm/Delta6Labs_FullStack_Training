import { createContext, useContext, useState } from 'react';
 
const ThemeContext = createContext();
 
export function useTheme() {

  return useContext(ThemeContext);

}
 
export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('light');
 
  const toggleTheme = () => {

    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

  };
 
  const value = {

    theme,

    toggleTheme,

  };
 
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

}

// import { useState, React } from "react";
// import { MyContext } from "./MyContext";
// import MyComponent from "./MyComponent";
// import { createContext } from 'react';

// export const MyContext = createContext("");

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <MyContext.Provider value={{ text, setText }}>
//         <MyComponent />
//       </MyContext.Provider>
//     </div>
//   );
// }

// export default App;