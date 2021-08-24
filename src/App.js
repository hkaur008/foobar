import { useState } from 'react';
import './App.css';

const alphabet = [];

function App() {
  const [selected, setSelected]= useState(0);
 const colorChange = (e)=>{
    setSelected(e.target.id);
     if(e.target.style.background==="green")
    {e.target.style.background="white";  }
    else
    {e.target.style.background="green";}
   alphabet.push(e.target.id);
  }

  const A = ()=>{
    ["36", "30", "24", "19", "13", "8", "3", "10", "16", "23", "29", "35", "41", "25", "26", "27", "28"].map((i)=>{ document.getElementById(i).style.background="green"})

  }

  return (
    <div className="App">
      <div className="alpha">
     {Array.from(Array(42).keys()).map( (i) =>{return <div id={i} onClick={(e)=>{colorChange(e)}}>{i}</div>} )}
      
    <button onClick={A}>A</button>
      
    </div></div>
  );
}

export default App;
