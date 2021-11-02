import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function App() {
  let date = new Date();
  let hours = date.getHours();
  let message = ``;
  let color = ``;
  if (hours < 12) {
    message = "Good morning ";
    color = "green";
  } else if (hours >= 12 && hours <= 20) {
    message = " Good afternoon ";
    color = "yellow";
  } else {
    message = "Good night ";
    color = "red";
  }
  return <h1 style={{ color: color }}>{message}</h1>;
}
ReactDOM.render(<App />, document.getElementById("root"));

