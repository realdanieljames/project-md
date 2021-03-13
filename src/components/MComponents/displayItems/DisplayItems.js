import React from "react";
import "./DisplayItems.css";





const DisplayItems = (props) => {

   const  deleteCard=()=>{


    }
// console.log(props);
return (
    <div className="items-container">
    {props.items.map((value) => {
        return (
        <div key={value.id} className="single-item-container">
            <button className="close-item-display-button"> X</button>
            <img className="item-image" src={value.imageLink}></img>
            <div className="item-name">{value.name}</div>
            {/* <div className="item-id">{value.id}</div> */}
            <div className="item-price">{value.price}</div>
            <div className="item-description">{value.description}</div>
        </div>
        );
    })}
    </div>
);
};

export default DisplayItems;
