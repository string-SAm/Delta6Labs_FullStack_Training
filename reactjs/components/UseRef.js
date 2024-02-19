import React, { useRef, useEffect, useState } from 'react';

const UseRefCounter = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    // Update the previous count after each render
    prevCount.current = count;
  }, [count]);

  const handleIncrement = () => {
    // Update the count state using setCount
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseRefCounter;


// //1. Basic Usage:

// import React, { useRef, useEffect } from 'react';

// const MyComponent = () => {
//   const myRef = useRef(null);

//   useEffect(() => {
//     // Access the current property to get the DOM element
//     console.log(myRef.current);
//   }, []);

//   return <div ref={myRef}>Example 1: Basic Usage</div>;
// };

// //export default MyComponent


// //2. Managing Focus:


// //import React, { useRef, useEffect } from 'react';

// const FocusInput = () => {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // Focus on the input element when the component mounts
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} placeholder="Type something..." />;
// };

// export default FocusInput