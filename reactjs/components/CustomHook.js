import { useEffect, useState } from 'react';

function useDarkMode() {
  // State to track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // Effect to update the document body class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Toggle function to switch between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
}

// Usage
function CustomHook() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div style={darkMode ?{height:'100vh',backgroundColor:'black'}:{backgroundColor:'white'}}>
      <h1>My App</h1>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode: {darkMode ? 'On' : 'Off'}
      </button>
    </div>
  );
}

export default CustomHook


// import { useState } from 'react';

// function useLocalStorage(key, initialValue) {
//   // Get stored value from localStorage or use initialValue
//   const storedValue = localStorage.getItem(key) || initialValue;

//   // State to hold the current value
//   const [value, setValue] = useState(storedValue);

//   // Update localStorage and state when the value changes
//   const updateValue = (newValue) => {
//     setValue(newValue);
//     localStorage.setItem(key, newValue);
//   };

//   return [value, updateValue];
// }

// // Usage
// function CustomHook() {
//   const [username, setUsername] = useLocalStorage('username', 'default');

//   return (
//     <div>
//       <p>Username: {username}</p>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//     </div>
//   );
// }

// export default CustomHook