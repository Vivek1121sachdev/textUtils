import React, {useState} from 'react'


export default function TextForm(props) {
 

    //function for updating the value of setText
    //with the help of this function we can add or remove text from textbox
    const handleOnChange = (event) => 
    {
        console.log("on change");
        setText(event.target.value);
    }
    
    // function for changing the value of textbox
    // using this function we cant add any text by ourself
    const handleUpClick = () => 
    {
        console.log("Uppercase was cliked");
        let NewText = text.toUpperCase();
        setText(NewText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handledownClick = () => 
    {
        console.log("LowerCase was clicked");
        let NewText = text.toLowerCase();           
        setText(NewText);
        props.showAlert("Converted to lowercase", "success");
    }

    // useState hook
    const[text, setText] = useState("");

    return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}} >  
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} maxLength="500" id="Mybox" rows="8" style={{backgroundColor:props.mode === 'dark'? '#043743':'white', color: props.mode === 'dark'? 'white':'black'}}></textarea>
        </div>
        
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handledownClick} >Convert to Lowercase</button>
    </div>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'black'}} >
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words ,{text.length} characters and {text.split("\n\n").filter((element)=>{return element.length !==0}).length} paragraphs</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} miniutes read time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}

TextForm.defaultProps = {
    heading : "Enter the text to analyze"
}