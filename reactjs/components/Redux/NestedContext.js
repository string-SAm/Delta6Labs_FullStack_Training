import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const UserContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Bob');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export const useUser = () => useContext(UserContext);

const UserInfo = () => {
    const { theme, setTheme } = useTheme();
    const { setUser } = useUser();
   
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
   
    const login = () => {
      setUser('John');
    };
  
    const { user } = useUser();
    
    return (
      <div>
        <div>User: {user}</div>
        <div className={theme}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <button onClick={login}>Login</button>
        </div>
        <div>{theme}</div>
      </div>
    );
  };
  

export default UserInfo;
