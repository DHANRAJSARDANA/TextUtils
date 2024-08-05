import { useState } from 'react'
import NavBar from './components/NavBar'
import TextArea from './components/TextArea'
import Alert from './Alert/Alert'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import About from './components/About';
import Home from './components/Home';

function App() {
  const [alert,setAlert]=useState(null);
  
  const showAlert=(msg)=>{
    setAlert({
      type:'success',
      msg:msg
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
    return (
    <>
    
    <NavBar title="Textutils" about="about"/>
     <Alert alert={alert?alert.msg:""} type={alert?alert.type:''} /> 
     <Routes>
<Route path='/TextUtils' element={<TextArea alertFn={showAlert} />}></Route>
<Route path='/about' element={<About/>}> </Route>
<Route path='/home' element={<Home/>}></Route>
</Routes>
    </>
  )
}

export default App
