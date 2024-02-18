import React from 'react';

// Define your higher order component
const withStyle = (WrappedComponent, style) => {
  // Return a new component
  return class StyledComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isDarkMode: false,
      };
    }

    toggleMode = () => {
      this.setState((prevState) => ({
        isDarkMode: !prevState.isDarkMode,
      }));
    };

    render() {
      // Apply the style to the wrapped component
      const combinedStyle = {
        ...style,
        backgroundColor: this.state.isDarkMode ? '#000' : '#fff',
        color: this.state.isDarkMode ? '#fff' : '#000',
        ...(this.props.style || {}),
      };

      // Render the wrapped component with the combined styles
      return (
        <WrappedComponent
          {...this.props}
          style={combinedStyle}
          toggleMode={this.toggleMode}
        />
      );
    }
  };
};

// Example component that will be wrapped with styles
const MyComponent = (props) => {
  return (
    <div style={props.style}>
      <p>This is my component</p>
      <button onClick={props.toggleMode}>Change</button>
    </div>
  );
};

// Wrap MyComponent with styles using the HOC
const StyledMyComponent = withStyle(MyComponent, {
  
  minHeight: '100vh',
});

// Use the styled component in your application
const ToggleScreen = () => {
  return (
    <StyledMyComponent />
  );
};

export default ToggleScreen;
