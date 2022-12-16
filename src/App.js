
import { useState } from 'react';
import './App.css';

function App() {

  const [count,setcount] = useState(0);
  const add = () => {
    setcount(count+1)
  }

  const minus = () => {
    if(count>=1){
      setcount(count-1)
    }
    else{
      setcount(0);
    }
  }

  const reset = () => {
    setcount(0);
  }

  return (
    <div className="App">
      <h1 className='heading'>Click Counter</h1>
      <h2 className='subheading'>The value of counter is</h2><br/>
      <h1>{count}</h1>
      <div className='btns'>
        <button className='btn1' onClick={add}>+</button> 
        <button className='btn2' onClick={reset}>RESET</button>
        <button className='btn3' onClick={minus}>-</button>
      </div>
      <div className='notes'>
        <p>NOTE:</p>
        <p>1. + increments the value of counter by 1.</p>
        <p>2. RESET helps to set the value back to 0.</p>
        <p>3. - decrements the value of counter by 1.</p>
      </div>
    </div>
  );
}

export default App;
