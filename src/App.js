import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Input from './components/Input';

function App() {
 
  //we use this hook to diplay value in input field and also to update or set this
  const [displayVal,setDisplayVal]=useState("")

  //this handler is for to check which button is pressed 
  // const onButtonClick = (buttonName)=>{
  //   console.log(buttonName)
  // }

  //This handler is to evaluation
  const onButtonClick = (buttonText)=>{
      
    if(buttonText === 'C'){
      setDisplayVal("")

    }else if(buttonText === '='){
      const result = eval(displayVal);
      setDisplayVal(result);
    }else{
      const newDisplayVal = displayVal + buttonText;
      setDisplayVal(newDisplayVal);
    }
    }

  
  return (
    <center>
      <h1>React Calculator</h1>
      <div className='calculator'>
      <Input displayVal = {displayVal}/>
      <Buttons onButtonClick = {onButtonClick} />
      </div>
    </center>
   
  );
}

export default App;
