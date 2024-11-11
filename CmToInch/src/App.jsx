import { useState } from 'react'
import './App.css'

function App() {

const [inputCm, setInputCm] = useState("");
const [convertedInches, setConvertedInches] = useState("");

const handleChange = (e) => {
  const cm = e.target.value;
  setInputCm(cm);
  const inches = cm / 2.54;
  setConvertedInches(inches);
}

  return (
    <form>
      <label> enter the lenght in cm, to convert into inches:
        <input id="inputCm"
          type="number"
          value={inputCm}
          onChange={handleChange}
        />
      </label>

      <p>{inputCm}cm is equal to {convertedInches}inches</p>
    </form>
  )

}

export default App
