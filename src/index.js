import React from 'react'; //creation Logic
import ReactDOM from 'react-dom'; //render logic


// import App from './App';

// ReactDOM.render(

//     <App />, // ek component..
//   document.getElementById('root') //ek jagah jha us component ko dikhana hai 
// );

import MyComp from "./MyComp" ;

ReactDOM.render(
  <MyComp />, // ek component
  document.querySelector("#root") // aur ek jagah jha us component ko dikhana hai
);