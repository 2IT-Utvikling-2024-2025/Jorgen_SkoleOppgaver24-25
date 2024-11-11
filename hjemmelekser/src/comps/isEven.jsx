import { useState } from 'react';

export default function checkOddOrEven() {
    const number = prompt("enter a number");
    if(number % 2 == 0){
       console.log("The number is even.");
    }
   
   else {
       console.log("The number is odd.");
   
   }
   }