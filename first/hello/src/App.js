// import logo from './logo.svg';
// import './App.css';
import React from "react";
import './App.css';

function App() {
    const name = "react";
    return (
        <>
            {/*이렇게 표기한다*/}
            <div className="react">{name}</div>
            <input type="text"/>
        </>
    );
  //   return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>
  // );
}

export default App;
