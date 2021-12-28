// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



import React, { useState } from 'react';
import './App.css';

export default function App(){
  const [count,setCount]=useState(0)
  var myStyle = {
    color:'brown'
  }

  return (
    <div>
      <h1 style={ myStyle }>My count is { count }</h1>
      <button onClick = { ()=>setCount(count+1)}>Add</button>
    </div>
  )
}


 
