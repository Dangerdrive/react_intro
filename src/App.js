import React, {useState} from 'react'; //to work with hooks
import logo from './logo.svg';
import './App.css';
import MyTestBody from './MyTestBody.js';
import Bottom from './Bottom.js';

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

  const [str,setStr] = useState('Hello World!');

  document.title = 'Fun\'rzr';

  function handleClick(){
    setStr('thanks bro! 👍');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-container'>
        <img src={logo} className="App-logo" alt="sample logo" />
        </div>
        <div className='text-container'>
        <p>help us fund good initiaves</p>
        <span className='below-text'>- or whatever -</span>
        </div>
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
      <h2>{str}</h2>
      <button onClick={handleClick}>Donate!</button>
      <MyTestBody conteudo=" is ready"></MyTestBody>
      <MyTestBody conteudo=" is done"></MyTestBody>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
