import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const clearDisplay = () => {
    setValue('');
  };

  const calculateResult = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <div>
      <h1 className='name'>Reyven Kenjy Y. Sanchez</h1>
      <div className="container">
        <div className="calculator">
          <form>
            <div className="display">
              <input type="text" value={value} readOnly />
            </div>
            <div>
              <button onClick={() => handleButtonClick('7')}>7</button>
              <button onClick={() => handleButtonClick('8')}>8</button>
              <button onClick={() => handleButtonClick('9')}>9</button>
              <button onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div>
              <button onClick={() => handleButtonClick('4')}>4</button>
              <button onClick={() => handleButtonClick('5')}>5</button>
              <button onClick={() => handleButtonClick('6')}>6</button>
              <button onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
              <button onClick={() => handleButtonClick('1')}>1</button>
              <button onClick={() => handleButtonClick('2')}>2</button>
              <button onClick={() => handleButtonClick('3')}>3</button>
              <button onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div>
              <button onClick={clearDisplay}>C</button>
              <button onClick={() => handleButtonClick('0')}>0</button>
              <button className="equal" onClick={calculateResult}>=</button>
              <button onClick={() => handleButtonClick('/')}>÷</button>
            </div>
          </form>
        </div>
        <div className='new-button'>
          <button onClick={() => setValue('Reyven Kenjy Y.Sanchez')}>Reyven IT 3-A</button>
        </div>
      </div>
    </div>
  );
}

export default App;
