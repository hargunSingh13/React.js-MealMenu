//import { StrictMode } from 'react' //this is for to directlu run component in strictmode tag
import { createRoot } from 'react-dom/client'
// import Appold from './Appold.jsx'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Appp from './Appp.jsx'
// import Appold from './Appold.jsx'

// import Navbar from './Component/Navbar.jsx'
// import Card from './Component/Card.jsx'
// import Footer from './Component/Footer.jsx'
// import Division from './Component/Division.jsx'
// import Register from './Component/Register.jsx'
// command npm run dev
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   {/* <Navbar />
  //   <Card />
  //   <Footer /> */}
  //   {/* <Division /> */}
  //   <App />
  //   <Register />
  // </StrictMode>
  <BrowserRouter >
    {/* <Appold /> */}
    {/* <App /> */}
    < Appp />
   
  </BrowserRouter>
)
