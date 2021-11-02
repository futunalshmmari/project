import React from "react";
import "../index.css"
function ProductCard(props){
return(
    <div >
<img className="he" src={props.img}/>
    <h1>{props.sar}SAR</h1>
     <p>size:{props.size}</p>
     <p> color:{props.color}</p>
    <p>{props.name}</p>
     </div>
    
);




}
export default ProductCard;