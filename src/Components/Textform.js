import React, {useState} from 'react'
//import PropTypes from 'prop-types'

export default function Textform(props) {

    const uppercase = () =>{
        //console.log("Upper-case button is clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const lowercase = () =>{
      //console.log("Upper-case button is clicked");
      let newtext = text.toLowerCase();
      setText(newtext);
  }

  const copy = () =>{
    
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  }

  const clear_text = () =>{
    //console.log("Upper-case button is clicked");
    let newtext = '';
    setText(newtext);
}

    const change = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    }

const [text , setText] = useState("Enter the text here");

  return (
    <>

    <div>
<div className="form-floating">
  
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value = {text} onChange = {change}></textarea>

  <button className="btn btn-primary mx-2 my-3" onClick = {uppercase}>Convert to UpperCase</button>

  <button className="btn btn-primary mx-2 my-3" onClick = {lowercase}>Convert to LowerCase</button>

  <button className="btn btn-primary mx-2 my-3" onClick = {copy}>Copy To Clipboard</button>

  <button className="btn btn-primary mx-2 my-3" onClick = {clear_text}>Clear Text</button>
</div>
      
    </div>

    <br />

    <div className="container">
      <h2>Above Text Summary : </h2>
      <li><b>Total Characters : {text.length}</b></li>
      <li><b>Total Words : {text.split(/\s+/).filter((element)=>{return element.length !== 0 }).length}</b></li>
    </div>

    </>
  );
}
