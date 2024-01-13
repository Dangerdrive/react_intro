import React, {useState} from 'react'; //to work with hooks
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {<header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//         {/* /*<p>
//           Edit <code>src/App.js</code> and save to reloSad.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//       <h2>Olá mundo.</h2>}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="sample logo" />
        {/* Uncomment below lines if you want to use them */}
        {/*
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
      </header>
      <h2>Olá mundo.</h2>
    </div>
  );
}

export default App;
