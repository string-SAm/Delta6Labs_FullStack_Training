// import React, { useState, useCallback } from 'react';
// //import ChildComponent from './ChildComponent';
 
// const ParentComponent = () => {
//   const [value, setValue] = useState('');
 
//   const handleChange = useCallback((e) => {
//     setValue(e.target.value);
//   }, []);
 
//   return (
//     <div>
//       <ChildComponent onChange={handleChange} />
//       <p>Value: {value}</p>
//     </div>
//   );
// };
 
// // ChildComponent.jsx
// //import React from 'react';
 
// const ChildComponent = ({ onChange }) => {
//   return (
//     <input type="text" placeholder="Type something" onChange={onChange} />
//   );
// };
 
// export default ParentComponent

//

import React, { useState, useCallback } from 'react';

const useCallbac = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default useCallbac