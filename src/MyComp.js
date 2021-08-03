import React from "react";

// let MyComp = () => {
//     return (
//       <div>
//         <h1>This is our Second React app.</h1>
//         <p>Some other html</p>
//       </div>
//     );
//   }

  class MyComp extends React.Component {
    state = {
      someNumber: 3,
    };
  
    render = () => {
      console.log("render function re-rendered") ;
      return (
        <div>
          <button
          onClick = { () => {

            this.setState({someNumber: this.state.someNumber + 1  })

          }  }
        >
          increment
        </button>
        
        <button 
          onClick = { () => {
            this.setState( { someNumber:this.state.someNumber - 1})
          }}
        >
          decreament
        </button>

          <h1> {this.state.someNumber} </h1>
        </div>
      );
    };
  }

export default MyComp ;