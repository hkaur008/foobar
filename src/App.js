import { useState } from 'react';
import './App.css';

const alphabet = [];

function App() {
  const [selected, setSelected] = useState(0);
  const colorChange = (e) => {
    setSelected(e.target.id);
    if (e.target.style.background === "green") {
      e.target.style.background = "white";
      console.log(alphabet);
    }
    else { e.target.style.background = "green"; }
    alphabet.push(e.target.id);
  }

  const A = () => {
    clear();
    ["36", "30", "24", "18", "19", "13", "7", "2", "3", "10", "16", "22", "23", "29", "35", "41", "20", "21"].map((i) => { document.getElementById(i).style.background = "green" })

  }
  const B = () => {
    clear();
    ["35", "29", "22", "21", "20", "40", "39", "38", "37", "36", "30", "24", "18", "19", "12", "6", "0", "1", "2", "3", "4", "11", "17"].map((i) => { document.getElementById(i).style.background = "green" })

  }
  const C = () => {
    clear();
    ["6", "1", "2", "3", "10", "17", "12", "18", "24", "30", "37", "38", "39", "34", "29"].map((i) => { document.getElementById(i).style.background = "green" })

  }
  const D = () => {
    clear();
    ["0", "6", "12", "18", "24", "30", "36", "1", "2", "3", "10", "23", "17", "29", "34", "39", "38", "37"].map((i) => { document.getElementById(i).style.background = "green" })

  }
  const E = () => {
    clear();
    ["0", "12", "6", "12", "18","24", "30", "36", "37", "38", "39", "40", "41", "1", "2", "3", "4", "5", "19", "20", "21", "22"].map((i) => { document.getElementById(i).style.background = "green" })

  }
  const F = () => {
    clear();
     ["36", "30", "24", "18", "12", "6", "0", "1", "2", "3", "4", "5", "19", "20", "21"].map((i) => { document.getElementById(i).style.background = "green" })

  }
  const G = () => {
    clear();
    ["11", "4", "3", "2", "1", "6", "12", "18", "24", "30", "37", "38", "39", "40", "35", "29", "23", "22", "21", "20"].map((i) => { document.getElementById(i).style.background = "green" })

  }
  const H = () => {
    clear();
    ["0", "12", "6", "18", "24", "24", "30", "36", "19", "20", "21", "22", "23", "17", "11", "5", "29", "35", "41"].map((i) => { document.getElementById(i).style.background = "green" })

  }

  const clear = () => {
    
    Array.from(Array(42).keys()).map((i) => { return document.getElementById(i).style.background = "white"; })
  }

  return (
    <div className="App">
      <div className="alpha">
        {Array.from(Array(42).keys()).map((i) => { return <div id={i} className="boxes" onClick={(e) => { colorChange(e) }}>{i}</div> })}

      </div>
      <div>
        <button onClick={A}>A</button>
        <button onClick={B}>B</button>
        <button onClick={C}>C</button>
        <button onClick={D}>D</button>
        <button onClick={E}>E</button>
        <button onClick={F}>F</button>
        <button onClick={G}>G</button>
        <button onClick={H}>H</button>
      </div>


    </div>
  );
}

export default App;
