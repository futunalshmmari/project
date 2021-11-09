import React, { useState } from "react";
function App(){
  let [answer , setCount ]=useState(0);
  let [count, srtAnswer]=useState("yes");
  console.log(answer);
function  increment(){
  setCount((answer=answer+1))
  srtAnswer(count=="yes" ? "no":"yes");
  }
  function  decement(){
    setCount((answer=answer-1));}
  return (
    <div>
      <h1>{answer}</h1>
      <button onClick={increment}> increment
      !</button>
      <p>{count}</p>
      <button onClick={decement}> increment
      !</button>
    </div>
  );
}



export default App