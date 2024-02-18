import React, { Component } from 'react';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Initial content'
    };
  }

  handleClick = () => {
    this.setState({ content: 'New content' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.content}</h1>
        <button onClick={this.handleClick}>Change Content</button>
      </div>
    );
  }
}

export default Name;
