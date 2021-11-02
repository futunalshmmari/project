import React from "react";

import '../index.css'

function Amazon (props) {

    return (
        <div className="contact-card">
            <img src={props.image} />
            <h3>{props.title}</h3>
            <p>price: {props.price}</p>
            <p>delivery: {props.delivery}</p>

            <hr></hr>
        </div>
    );
}

export default Amazon;