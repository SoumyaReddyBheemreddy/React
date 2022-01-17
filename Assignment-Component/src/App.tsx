import React, { useState } from 'react';
import './App.css';
import Display from './Display';
import Button from './Button';
function App() {
  var [count,setCount] = useState(0);
  const increment=()=>{
    setCount((previousCount)=>{
      return previousCount+1;
    });
  }
  const decrement=()=>{
    setCount((previousCount)=>{
      return previousCount-1;
    });
  }
  return (
    <div className="App">
     <Display count={count}/>
     <Button value="+" handleClick={increment}/>
     <Button value='-' handleClick={decrement} /> 
    </div>
  );
}

export default App;
