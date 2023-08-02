import React,{useState} from 'react'

export default function Textarea(props) {
  const [text,settext]=useState("ENTER YOUR TEXT HERE");

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    settext(newText);
    props.showAlert("converted to uppercase","success");
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    settext(newText);
    props.showAlert("converted to lowercase","success");
  }

  const handleClear=()=>{
    let newText='';
    settext(newText);
    props.showAlert("Text cleared","success");
  }

  const handleOnChange=(e)=>{
    settext(e.target.value);
    props.showAlert("Typing","success");
  }
  const handleCopy=()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!!!!!!","success");
  }
  const handleExtraSpace=()=>{
    let arr=text.split(/[ ]+/);
    settext(arr.join(" "));
  
  }
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="form-group">
      {/* <label htmlFor="myBox">Example textarea</label> */}
      <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#212529', color:props.mode==='light'?'black':'white'}} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>copy</button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpace}>Remove extra spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} minutes to read</p>
    </div>
    </>

  )
}
