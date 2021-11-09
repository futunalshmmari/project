import React ,{ useState } from "react";


function Cake (props) {
  console.log("props");
  console.log(props);
  let [count, setCount] = useState(1);

  const IncrementItem = () => {
    if (count == "zero") {
      setCount(1);
    } else {
      setCount(count++);
    }
  };
  const DecreaseItem = () => {
    if (count > 1) {
      setCount(count--);
    } else {
      setCount("zero");
    }
  };
  return (
    <div>
      <img width="50" height="50" src={props.image} />

      <tr>
        <td>{props.title}</td>
        <td>
          <b> {props.quantity}</b>
        </td>
        <td>{props.button}</td>
        <button onClick={IncrementItem}>+</button>
        <td>
          {" "}
          <span
            id="span1"
            style={{ color: "blue", backgroundColor: "lightgray" }}
          >
            {" "}
            {count}
          </span>
        </td>
        <button onClick={DecreaseItem}>-</button>
      </tr>

      <hr></hr>
    </div>
  );
}
export default Cake ;
