import React, {useState} from 'react'   //rfc


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase is clicked." + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase is clicked." + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        setText("")
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event)=>{
        // console.log("On change.")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text here");

  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" rows="5" style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark' ? 'white':'#042743'}}></textarea>
    </div>    
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className='container my-3' style = {{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary:</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
