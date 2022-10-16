import React, {useState} from "react";

function TextForm(props) {
    //Declaring a new state variable named text
    const [text, setText] = useState("");

    //function to uppercase the text in textarea
    const upperText = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerText = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    //function to clear the text
    const clearTxt = ()=>{
        setText("");
    }

    //function to copy the text to clipboard
    const copyTxt = ()=>{
        let n = document.getElementById("myBox");
        n.select();
        navigator.clipboard.writeText(text);
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
    }

    let words = text.split(" ").length;
    let characters = text.length;

    let minutes = 0.0036 * words;

    let preview = text;

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={updateText} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperText}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={lowerText}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={clearTxt}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={copyTxt}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{words} words and {characters} characters</p>
            <p>{minutes} minutes to read</p>
            <p>{minutes * 60} seconds to read</p>

            <h3>Preview</h3>
            <p>{preview}</p>
        </div>
        </>
    )
}

export default TextForm;