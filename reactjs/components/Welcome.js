import React from "react";

// function Welcome(props) {

//     return (
//       <div>
//         <h1>Bhai {props.name}</h1>
//         <p>{props.message}</p>
//       </div>
//     );
//   }

  class Counter extends React.Component {

    constructor(props){
      super(props)
      this.state={
        count:0
      }
    }

    increment=()=>{
      this.setState({count:this.state.count+1})
    }
 
    render() {
      //const { name } = this.props;
      return (
        <div>
          <h1>Counter:{this.state.count}</h1>
          <button onClick={this.increment}>increment</button>
        </div>
      );
    }
  }


export default Counter;

// class Welcome extends React.Component {
 
//   render() {
//     const { name } = this.props;
//     return (
//       <div>
//         <h1>Hello {name}</h1>
//       </div>
//     );
//   }
// }