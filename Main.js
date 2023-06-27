import React from 'react'
import { useState } from 'react'
// import is neccesary

export default function Main(prop) {

  const Handleup = () => {
   let name = text
   let up = name.toUpperCase();
   setText(up)
   prop.showAlert("Letters has Uppercase successfully!","success")
  //  setText update the value of text here it update the value of text to uppercase
   console.log(text)
 }

 const Handlelowup = () => {
  let name = text.toLowerCase();
  setText(name)
  prop.showAlert("Letters has Lowercase successfully!","success")
 }



  // const Total = countChar.length;
  

//  here setText target the inner value of box (textarea) as we see in the output
 

 const [text, setText] = useState("");
//  the value in the useState s bracket is the value of text 
 const [word,setWord] = useState({WordCount:0});

//  Select text function
 const selectText = () => {
 let text = document.getElementById('myBox');
 text.select();
 navigator.clipboard.writeText(text.value)
 document.getSelection().removeAllRanges();
 prop.showAlert('All the text is copy successfully','success')
 }

//  remove extra space function
 const removeExtra = () => {
  let spaceL = text.split(/[ ]+/);
  setText(spaceL.join(" "));
//  only remove space line by line not in case if you write a word in one line and other in second line and use it then it cannot work
 prop.showAlert('Extra space between element has been removed','success')
}

const clearAll = () => {
const newText = ''
setText(newText)
}
 
 const Handle1 = (event) => {
  const count = event.target.value;
  setText(count)
  }

 
  return (
    <div>
     
      <div className='container'>
      <h1 style = {{color : prop.back == 'black'? 'white' : 'black',paddingTop:'2REM'}}>WORD COUNTER</h1>
      <div className="sd-3">
  <textarea className="form-control" value={text} onChange={Handle1} id="myBox"style={{backgroundColor:prop.back == 'black'? 'grey' : 'white',color : prop.back == 'black'? 'white' : 'black'}} rows="8"></textarea>
  <button className='btn btn-primary mx-1 my-3' onClick={Handleup}>Convert to uppercase</button>
  <button className='btn btn-primary mx-1 my-3' onClick={Handlelowup}>Convert to lowercase</button>
  <button className='btn btn-primary mx-1 my-3' onClick={selectText}>Select the Text</button>
  <button className='btn btn-primary mx-1 my-3' onClick={removeExtra}>Remove Extra Spaces</button>
  <button className='btn btn-primary mx-1 my-3' onClick={clearAll}>Clear</button>
  </div>

  </div>
  <div className='container'>
    <h5 style = {{color : prop.back == 'black'? 'white' : 'black'}}> {text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</h5>
    <h4 style = {{color : prop.back == 'black'? 'white' : 'black'}}>Preview</h4>
    <p style = {{color : prop.back == 'black'? 'white' : 'black'}}>{text.length == 0? 'Write something to see preview' : text}</p>
  </div>
    </div>
  )
}

// the function name s letter is capital and enclosed in curly brackets {}