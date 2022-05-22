import './css/converter.css'
import { useState } from 'react';

function App() {
  // const timer = ms => new Promise(res => setTimeout(res, ms))

  var [input1, setInput1] = useState('0');
  var [input2, setInput2] = useState('0');

  var [selected_1, setSelected_1] = useState('gigabyte');
  var [selected_2, setSelected_2] = useState('megabyte');

  var active_1 = false; var active_2 = false; 
  console.log(active_1, active_2)

  const database = {
    "byte": 8,
    "kilobyte": 8192,
    "megabyte": 8388608,
    "gigabyte": 8589934592,
    "terabyte": 8796093022208,
    "petabyte": 9007199254740992,
    "exabyte":  9223372036854776000,
    "zettabyte":8000000000000000000000,
    "yottabyte":8000000000000000000000000,

  }

  const change_input = (event) => { setInput2(parseFloat(event.target.value)*database[selected_1]/database[selected_2]) }
  const get_selected_1 = (e) => { setSelected_1(e.target.innerText) }
  const get_selected_2 = (e) => { setSelected_2(e.target.innerText) }

  function switch1() {
    active_1 = !active_1;
    if(active_1) { document.getElementsByClassName("dropdown-items")[0].style.opacity = "1"; document.getElementsByClassName("dropdown-items")[0].style.transform = "translateY(7px)"; }
    else { document.getElementsByClassName("dropdown-items")[0].style.opacity = "0"; document.getElementsByClassName("dropdown-items")[0].style.transform = "translateY(0px)"; }
  }
  function switch2() {
    active_2 = !active_2;
    if(active_2) { document.getElementsByClassName("dropdown-items")[1].style.opacity = "1"; document.getElementsByClassName("dropdown-items")[1].style.transform = "translateY(7px)"; }
    else { document.getElementsByClassName("dropdown-items")[1].style.opacity = "0"; document.getElementsByClassName("dropdown-items")[1].style.transform = "translateY(0px)"; }
  }

  return (
    <div className="main-div">
      <h1 className='default'>Computer Units Converter</h1>
      <h4 className='default'>The most user-friendly open source unit converter. Written in react.js</h4>
      <div className='input-container'>
        <input value={input1} onInput={e => setInput1(e.target.value)} onChange={change_input} placeholder="0" className="input"/>
        <input value={input2} onInput={e => setInput2(e.target.value)} onChange={change_input} placeholder="0" className="input"/>
        <div className="DropDown">
          <p className="selectDropDown" onClick={switch1}>{ selected_1 }</p>
          <div className='dropdown-items'>
            <p className='unit_name' onClick={get_selected_1}>byte</p>
            <p className='unit_name' onClick={get_selected_1}>kilobyte</p>
            <p className='unit_name' onClick={get_selected_1}>megabyte</p>
            <p className='unit_name' onClick={get_selected_1}>gigabyte</p>
            <p className='unit_name' onClick={get_selected_1}>terabyte</p>
            <p className='unit_name' onClick={get_selected_1}>petabyte</p>
            <p className='unit_name' onClick={get_selected_1}>exabyte</p>
            <p className='unit_name' onClick={get_selected_1}>zettabyte</p>
            <p className='unit_name' onClick={get_selected_1}>yottabyte</p>
          </div>
        </div>
        <div className="DropDown">
          <p className="selectDropDown" onClick={switch2}>{ selected_2 }</p>
          <div className='dropdown-items'>
            <p className='unit_name' onClick={get_selected_2}>byte</p>
            <p className='unit_name' onClick={get_selected_2}>kilobyte</p>
            <p className='unit_name' onClick={get_selected_2}>megabyte</p>
            <p className='unit_name' onClick={get_selected_2}>gigabyte</p>
            <p className='unit_name' onClick={get_selected_2}>terabyte</p>
            <p className='unit_name' onClick={get_selected_2}>petabyte</p>
            <p className='unit_name' onClick={get_selected_2}>exabyte</p>
            <p className='unit_name' onClick={get_selected_2}>zettabyte</p>
            <p className='unit_name' onClick={get_selected_2}>yottabyte</p>
          </div>
        </div>
      </div>

    </div>
  );
}
        // </div><!--button className="button"></button-->
export default App;








