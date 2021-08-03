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
      return (
        <div>
          <h1> {this.state.someNumber} </h1>
        </div>
      );
    };
  }

export default MyComp ;