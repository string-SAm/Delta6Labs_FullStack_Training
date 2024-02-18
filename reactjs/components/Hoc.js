import React from 'react';

// This is the Higher Order Component (HOC)

const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted.`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};


// This is a simple component
const MyComponent = ({ message }) => {
  return <div>{message}</div>;
};

// Wrap the component with the HOC
const MyComponentWithLogging = withLogging(MyComponent);

// Usage of the wrapped component
const Hoc = () => {
  return <MyComponentWithLogging message="Hello, world!" />;
};

export default Hoc;
