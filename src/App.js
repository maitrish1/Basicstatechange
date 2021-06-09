import './App.css';
import React, {useState} from 'react'

function App() {
  const [state, setState]=useState('Maitrish')

  const handleClick=()=>{
    setState('Nigga')
  }
  return (
    <div className="App">
      <p className="nigga">{state}</p>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;
