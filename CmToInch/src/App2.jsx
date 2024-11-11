import { useState } from 'react'
function Isodd() {

    const [inputNumber, setInputNumber] = useState("");

    function isEven(inputNumber) {
        return n % 2 == 0;  //dette ser om n er et Partall, via å dele på to, om det får et helt tall, er tallet et partall.
     }
     
     function isOdd(inputNumber) {
        return n % 2 == 1;  //dette ser om n er et oddetall, via å dele på to, om det ikke får et helt tall, er tallet et oddetall.
     }

  return (
    <form>
      <label> enter the number you want to know if is odd or even:
        <input id="inputNumber"
          type="number"
          value={inputNumber}
        />
      </label>

      <p>{inputNumber} is {Isodd(inputNumber) ? "odd" : "even"}</p>
    </form>
  )

}

export default Isodd