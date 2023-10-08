import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';

function App() {
  let [input1,setInput1] = useState("");
  let [input2,setInput2] = useState("");
  let [input3,setInput3] = useState("");
  const handleChange = () => {
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    if(!isNaN(num1) && !isNaN(num2)){
      setInput3(num1+num2)
    }else{
      setInput3("")
    }
  }
  const handleChange1 = (e) => {
    setInput1(e.target.value)
  }
  const handleChange2 = (e) => {
    setInput2(e.target.value)
  }
  return (
    <div className="App">
      <input type="number"
            id="input1"
            value={input1}
            onChange={handleChange1}></input>
      <input type="number"
            id="input2"
            value={input2}
            onChange={handleChange2}></input>

      <input type="number"
                  id="input3"
                  value={input3} 
                  readOnly
                  ></input>
      <button type="button" onClick={handleChange}>Submit</button>
    </div>
  );
}

export default App;
