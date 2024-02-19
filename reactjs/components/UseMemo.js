import React, { useState, useMemo } from 'react';
 
const UseMemo = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
 
  const filteredData = useMemo(() => {
    console.log("Filtering data...");
    return data.filter(item => item.includes(filter));
  }, [data, filter]);
 
  return (
    <div>
      <input
        type="text"
        placeholder="Filter data..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setData(prevData => [...prevData, `Item ${prevData.length}`])}>
        Add Item
      </button>
    </div>
  );
};
 
export default UseMemo;

// import React, { useState, useMemo } from 'react';
// const MemoizedComponent = React.memo(({ prop }) => {
//   console.log("Rendering MemoizedComponent...");
//   return (
//     <div>
//       <p>Prop value: {prop}</p>
//     </div>
//   );
// });
// const App = () => {
//   const [count, setCount] = useState(0);
//   const memoizedComponent = useMemo(() => <MemoizedComponent prop={count} />, [count]);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>Count: {count}</p>
//       {memoizedComponent}
//     </div>
//   );
// };
// export default App;

// import React, { useState, useMemo } from 'react';
 
// const ExpensiveComponent = ({ number }) => {
//   // Simulating a computationally expensive operation
//   const calculateExpensiveValue = (num) => {
//     console.log("Calculating expensive value...");
//     let result = 0;
//     for (let i = 0; i < num * 1000000; i++) {
//       result += Math.random();
//     }
//     return result;
//   };
 
//   const expensiveValue = useMemo(() => calculateExpensiveValue(number), [number]);
 
//   return (
//     <div>
//       <p>Expensive value: {expensiveValue}</p>
//     </div>
//   );
// };
 
// const UseMemo = () => {
//   const [count, setCount] = useState(0);
 
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>Count: {count}</p>
//       <ExpensiveComponent number={count} />
//     </div>
//   );
// };
 
// export default UseMemo;