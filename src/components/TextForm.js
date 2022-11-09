import React, {useState} from "react";

function TextForm(props) {
    //Declaring a new state variable named text
    const [text, setText] = useState("");

    //function to uppercase the text in textarea
    const upperText = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const lowerText = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    //function to clear the text
    const clearTxt = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    //function to copy the text to clipboard
    const copyTxt = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    }

    //function to write in the text area
    const updateText = (event) =>{
        setText(event.target.value);
    }

    //function to remove extra spaces
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        // console.log(newText);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }

    let words = text.split(/\s+/).filter((element) =>{
        return element.length !== 0;
    }).length;

    let characters = text.length;
    let minutes = 0.0036 * words;
    let preview = text;

    return (
        <>
        <div className="container">
            <h1 style = {{color: props.mode === "dark"?"white":"black"}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={updateText} style = {{color: props.mode === "dark"?"white":"black", backgroundColor: props.mode === "dark"?"#404258":"white"}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={upperText}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={lowerText}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={clearTxt}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={copyTxt}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style = {{color: props.mode === "dark"?"white":"black"}}>
            <h2>Your Text Summary</h2>
            <p>{words} words and {characters} characters</p>
            <p>{minutes} minutes to read</p>

            <h3>Preview</h3>
            <p>{preview.length>0?preview:"Enter something in text box to preview it here"}</p>
        </div>
        </>
    )
}

export default TextForm;