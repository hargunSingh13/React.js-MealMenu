import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import Todo from './Component3/Todo'
import Bmical from './Component4/Bmical'
// import Quiz from './Component5/Quiz'
// import Rating from './Component6/Rating'
// import Recapcha from './Component7/Recapcha'
// import Theme from './Component8/Theme'
//  import Menu from './Component9/Menu'
// import Reciepe from './Component10/Reciepe'
const Appp = () => {
  return (
    <>
    <Routes>
     {/* <Route path="/Todo" element ={<Todo />}/> */}
    <Route path="/Bmi" element ={<Bmical />}/>
    {/* <Route path="/Qui" element ={<Quiz />}/>
    <Route path="/Rat" element ={<Rating />}/>
    <Route path="/Captcha" element ={<Recapcha />}/>  */}
    
    {/* <Route path="/Theme" element ={< Theme/>}/> */}
    {/* <Route path="/Menu" element ={< Menu/>}/> */}
    {/* <Route path="/Rec" element ={< Reciepe/>}/> */}
    </Routes>
    </>
  )
}

export default Appp