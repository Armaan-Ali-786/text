
import './App.css';
import Navbar from './components/Navbar'
import Alert from  './components/Alert'
// import Module from './components/Module'
import State from  './components/Main'
// import { BrowserRouter } from "react-router-dom";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";




import { useState } from 'react';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Navbar />}>
//       <Route path="about" element={<Module />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );


export default function App() {


  const[back,setBack] = useState('white');
  const [alert,setAlert] = useState(null);

  const toogleIt = () => {
    if(back === "white"){
      setBack('black')
      document.body.style.backgroundColor = '#000066';
      showAlert('Dark mode is enabled','success')
    }
    else{
      setBack('white')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled','success')
    }
  }


  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },2000)
  }

  return (
  
  //  <RouterProvider router ={router}/>
<>
     <Navbar toogleIt = {toogleIt} back ={back}  title ="About"/>
     <Alert alert = {alert}  />
     <State back = {back} showAlert = {showAlert} /> 
     </>
  );
}

// export default App;
// import React from 'react'
// import { useState } from 'react'
// import  ReactDOM  from 'react-dom/client'

// export default function Mod() {
//     const[text, setText] = useState({
//         brand:"ford",
//         color:"green"
//     });

//   return (
//     <>
//         <h1>
//         Hi my car is {text.brand} and its color is {text.color}
//         </h1>
//     </>
//   )
// }
// const hello = ReactDOM.createRoot(document.getElementById('root'));
// hello.render(<Mod />);
