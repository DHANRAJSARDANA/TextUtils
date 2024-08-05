import React from 'react'
import { useState } from 'react'

export default function TextArea({alertFn}) {
  const [text,setText]=useState("")
 
  const [mystyle,setMyStyle]=useState({
    color:"black",
    backgroundColor: "white",
  })
const [enable,setEnable]=useState(true);
  const lightMode=()=>{
setMyStyle({
  color:"black",
    backgroundColor: "white"
})
setEnable(true)
document.body.style.backgroundColor='white';
alertFn('lightmode enabled')
  }
  const darkMode=()=>{
    setMyStyle({
        color:"white",
          backgroundColor: "#040f3d"
      })
      setEnable(false)
      document.body.style.backgroundColor='#040f3d';
        alertFn('dakmode enabled')
  }
const upperCase=()=>{
    setText(text.toUpperCase());
    text.length>0?alertFn('text is uppercase'):alertFn("enter text please")
}
const lowerCase=()=>{
    setText(text.toLowerCase());
    
    text.length>0?alertFn('text is lowercase'):alertFn("enter text please")
    
  }
 
    return (
        <>
  <div className='container' style={mystyle}>
       <h2>Enter the text to analyze below</h2>
    <textarea value={text} cols={100} rows={8} onChange={(e)=> setText(e.target.value)} style={mystyle.color=='white'?{color:"white",
          backgroundColor: "black"}:mystyle
    }></textarea>
    <br />
    <button type="button" className="btn btn-primary m-3" onClick={upperCase} >UpparCase</button>
    <button type="button" className="btn btn-primary" onClick={lowerCase}>LowerCase</button>
    <h3>Text Summary </h3>
    <p> {text.split(" ").length-1} words and {text.length} characters </p>
    <h3>Preview</h3>
    <p>{text}</p>
   
    <div className="btn-group m-5" role="group" aria-label="Basic mixed styles example">
    <button type="button" className="btn btn-outline-light" disabled={enable} onClick={lightMode}>Light</button>
    <button type="button" className="btn btn-outline-dark" disabled={!enable} onClick={darkMode}>Dark</button>
  </div>
  </div>
  </>
  )
}
