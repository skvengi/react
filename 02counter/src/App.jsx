import './App.css'
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = ()=>{
    if(counter<20) setCounter(counter+1);
    
    console.log("Value added",counter);
    
  }

  const removeValue = () =>{
    if(counter>0) setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai or code</h1>
      <h2>Current value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
