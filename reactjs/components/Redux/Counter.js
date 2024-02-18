// components/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Action/counterAction';
 
const Counter = ({ count, increment, decrement }) => {
  return (
<div>
<h1>Counter App</h1>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
  );
};
 
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
 
export default connect(mapStateToProps, { increment, decrement })(Counter);