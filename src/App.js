import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [input1, setInput1] = useState("");
  let [input2, setInput2] = useState("");
  let [input3, setInput3] = useState("");
  const handleChange = () => {
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setInput3(num1 + num2);
    } else {
      setInput3("");
    }
  };
  const handleChange1 = (e) => {
    setInput1(e.target.value);
  };
  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
          <label for="input1" class="input-label">Input1</label>
          <br />
          <input
            type="number"
            id="input1"
            value={input1}
            placeholder="Type your input..."
            onChange={handleChange1}
          ></input>
          <br />
      <label for="input2">Input2</label>
      <br />
      <input
        type="number"
        id="input2"
        value={input2}
        placeholder="Type your input..."
        onChange={handleChange2}
      ></input>
      <br />
      <label for="input3">Answer</label>
      <br />
      <input
        type="number"
        id="input3"
        value={input3}
        readOnly
        placeholder="Answer..."
      ></input>
      <br />
      <button type="button" onClick={handleChange}>
        Submit
      </button>
    </div>
  );
}

export default App;
