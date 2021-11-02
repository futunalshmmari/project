import React from "react";
import "../index.css"
function Youtube(props) {

    return (
        <div className="contact-card">
            <img src={props.image} />
            <h3>{props.title}</h3>
            <p>link: {props.link}</p>
            <p>views: {props.views}</p>
            <p>time: {props.time}</p>
            <hr></hr>
        </div>
    );
}
export default Youtube;