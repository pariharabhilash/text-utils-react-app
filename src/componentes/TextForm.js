import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to UpperCase", "success");
  };
  const handleLoClick = () => {
    // console.log("LowerCase was clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to LowerCase", "success");
  };
  const handleclearClick = () => {
    //console.log("LowerCase was clicked" +text);
    let newText = "";
    setText(newText);
  };
  const handlecopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to Clipboard", "success");
  };
  const handlespaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn primary mx-2 my-2"
          onClick={handleUpClick}
        >
          convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn primary mx-2 my-2"
          onClick={handleLoClick}
        >
          convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn primary mx-2 my-2"
          onClick={handleclearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn primary mx-2 my-2"
          onClick={handlecopyClick}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn primary mx-2 my-2"
          onClick={handlespaceClick}
        >
          Remove Space
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
