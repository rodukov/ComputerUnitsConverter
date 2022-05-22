import './css/converter.css'
import { useState } from 'react';

function App() {
  // const timer = ms => new Promise(res => setTimeout(res, ms))

  var [input1, setInput1] = useState('0');
  var [input2, setInput2] = useState('0');

  var selected_1 = 'gigabyte';
  var selected_2 = 'megabyte';

  

  const database = { "gigabyte": 8589934592, "megabyte": 8388608 }
  async function change_input(event) { /* event.target.value */
    console.log(event.target.value)
    setInput2(parseFloat(event.target.value)*database["gigabyte"]/database["megabyte"])
  }

  return (
    <div className="main-div">
      <h1 className='default'>Computer Units Converter</h1>
      <h4 className='default'>The most user-friendly open source unit converter. Written in react.js</h4>
      <div className='input-container'>
        <input value={input1} onInput={e => setInput1(e.target.value)} onChange={change_input} placeholder="0" className="input"/>
        <input value={input2} onInput={e => setInput2(e.target.value)} onChange={change_input} placeholder="0" className="input"/>
        <div className="DropDown" id="dropdown_1">
          <p className="selectDropDown">{ selected_1 }</p>
          <div className='dropdown-items'>
            <p className='unit_name'>byte</p>
            <p className='unit_name'>kilobyte</p>
            <p className='unit_name'>megabyte</p>
            <p className='unit_name'>gigabyte</p>
            <p className='unit_name'>terabyte</p>
            <p className='unit_name'>petabyte</p>
            <p className='unit_name'>exabyte</p>
            <p className='unit_name'>zettabyte</p>
            <p className='unit_name'>yottabyte</p>
          </div>
        </div>
        <div className="DropDown" id="dropdown_1">
          <p className="selectDropDown">{ selected_2 }</p>
          <div className='dropdown-items'>
            <p className='unit_name'>byte</p>
            <p className='unit_name'>kilobyte</p>
            <p className='unit_name'>megabyte</p>
            <p className='unit_name'>gigabyte</p>
            <p className='unit_name'>terabyte</p>
            <p className='unit_name'>petabyte</p>
            <p className='unit_name'>exabyte</p>
            <p className='unit_name'>zettabyte</p>
            <p className='unit_name'>yottabyte</p>
          </div>
        </div>
      </div>

    </div>
  );
}
        // </div><!--button className="button"></button-->
export default App;








