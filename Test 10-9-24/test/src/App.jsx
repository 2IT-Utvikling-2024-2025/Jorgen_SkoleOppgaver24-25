export default App
import { useState } from 'react'
import './App2.css'

function App() {
  const [nokValuta, setNokValuta] = useState("")
  const [convertedIDR, setConvertedIDR] = useState("") //Indonesia
  const [convertedEUR, setConvertedEUR] = useState("") //Spania
  const [convertedINR, setConvertedINR] = useState("") //India
  const [convertedYEN, setConvertedYEN] = useState("") //Japan

  const handleChangeIndonesia = (e) => {
    const nok = e.target.value;
    setNokValuta(nok);
    const idr = nok * 1455.10;   //er usikker på matten her, men koden skal være riktig =)
    setConvertedIDR(idr);
  }

  const handleChangeSpania = (e) => {
    const nok = e.target.value;
    setNokValuta(nok);
    const eur = nok * 0.085 ;
    setConvertedEUR(eur);
  }

  const handleChangeIndia = (e) => {
    const nok = e.target.value;
    setNokValuta(nok);
    const inr = nok * 7.82;
    setConvertedINR(inr);
  }

  const handleChangeJapan = (e) => {
    const nok = e.target.value;
    setNokValuta(nok);
    const yen = nok * 13.83;
    setConvertedYEN(yen);  
  }




  return (
    <>
    <div className='overskrift'>
  <h1>Yr Lite</h1>
  <h3>
    Weather and currencies
  </h3>
  </div>

<div>
  --

      <form className="Indonesia">    
        <h3>Location: Indonesia</h3>
        <p>Temperature: 18.3°C</p>
        <p>Weather: Heavy Rain</p>

        <label> NOK to IDR converter  
          <input id="1"
            type='number'
            value={nokValuta}
            onChange={handleChangeIndonesia}
          />
            
        </label>

        <p>{nokValuta}kr is {convertedIDR} Indonesian Rupiah  </p>
      </form>
      <div>
        --
      </div>

      <form className="Spania">
        <h3>Location: spain</h3>
        <p>Temperature: 15.7°C</p>
        <p>Weather: Cloudy</p>

        <label> NOK to EUR converter  
          <input id="2"
            type='number'
            value={nokValuta}
            onChange={handleChangeSpania}
          />
        </label>
        <p>{nokValuta}kr is {convertedEUR} euro  </p>
      </form>

      <div>
        --
      </div>

      <form className='India'>
      <h3>Location: India</h3>
        <p>Temperature: 30.6°C</p>
        <p>Weather: Thunder and rain</p>

        <label> NOK to INR converter
        <input id="3"
            type='number'
            value={nokValuta}
            onChange={handleChangeIndia}
          />
            
        </label>

        <p>{nokValuta}kr is {convertedINR} Indian Rupee</p>
      </form>

      <div>
        --
      </div>

      <form className='Japan'>
      <h3>Location: Japan</h3>
        <p>Temperature: 16.2°C</p>
        <p>Weather: partially clouded</p>

        <label> NOK to YEN converter
        <input id="4"
            type='number'
            value={nokValuta}
            onChange={handleChangeJapan}
          />
            
        </label>

        <p>{nokValuta}kr is {convertedYEN} Japanese Yen</p>
      </form> </div>
    </>
  )
}
