import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick1 = (event) =>{
    console.log('Button id is:-button-a');
  }
  const handleClick2 = (event) =>{
    console.log('Button id is:-button-b');
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={handleClick1}>Button A</button>
      <button id="button-b" onClick={handleClick2}>Button B</button>
    </div>
  )
}


export default App;
