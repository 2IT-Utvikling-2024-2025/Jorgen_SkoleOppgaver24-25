import { useEffect, useState } from 'react'
import './css/App.css'
import Button from "./button.jsx";
//import Profile from './profile.jsx';
import UserProfile  from "./Profile.jsx";
import MyList from './MyList'
import React, {Component} from "react";
import Corregidor from "react-explode/Corregidor.js";



function App() {

//countdown
  const [time, setTime] = useState(10);

  class ReactExplode extends Component {
    render() {
      return <Corregidor size="800" delay={0} repeatDelay={0} repeat={1} />
    }}

  useEffect(() => {

    const myinterval = setInterval(() => {

      if (time == 0) {
        setTime(10)
        }
        
       else {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearInterval(myinterval);
  }, [time])
//end

//explosion on count end
  return(
    <p>
      <div>
        <MyList></MyList>
      </div>
      this page wil explode in:
      {time == 0 ? <ReactExplode /> : <p>{time}</p>}
      </p>
      
  )
  //end
  
 

//variabel. en verdi som kan endres.
let user = {
    name: 'Totally free!',
    age: 'No viruses!',
    adresse: 'much powers!'
}
let content;
let isLoggedIn = true;


if (isLoggedIn) {
  content = <Button />;
}  else  {
    content = <UserProfile />
}


 return(
    <>
    {/*<UserProfile />
  <div>
    <h1>Download FREE GPU here!</h1>
    <Button />
  </div>

  <div className='container'>
  <p>{user.name}, {user.age}, {user.adresse}</p>

    {content}

  </div>*/}
  <MyList></MyList>
  <time />

  {time == 0 ? <ReactExplode /> : <p>{time}</p>}
  </>
  
 )
}

export default App
