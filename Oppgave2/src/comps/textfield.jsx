import { useState } from 'react';
import './textfield.css';
 
export default function Textfield() {

  const [inputContent, setInputContent] = useState('')

  function handleChange(e) {
    console.log(e.target.value);
    setInputContent(e.target.value);
   }
  return (
    <>
      {' '}
      <div className="container">
        <div className="section">
          <div className="question">
            <h1>Hva er adressen til Drømtorp VGS?</h1>
          </div>
 
          <div className="answer">
            <label htmlFor="">
              Text input:
              <input
                className="myInput"
                type="text"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
 