import { connect } from 'react-redux';
import { increment,decrement,incrementAsync } from './Action';

const ReduxThunkjs = ({ counter, increment, decrement, incrementAsync }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementAsync}>Increment Async</button>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunkjs);