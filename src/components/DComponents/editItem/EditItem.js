import React, { useState } from "react";
import "./EditItem.css";

//========================================================================================//
//========================================================================================//

const EditControlComponent = (props) => {
const [showEditControls, setShowEditControls] = useState(false);

console.log(props)
//========================================================================================//
//========================================================================================//

const openEditControlComponent = () => {
    if (showEditControls === true) {
    setShowEditControls(false);
    } else {
    setShowEditControls(true);
    }
};

const prePopulateTextFields = (event) => {

    console.log(event.target.value);
    
    
};

//========================================================================================//
//========================================================================================//
return (
    <div>
    <button className="edit-item-button" onClick={openEditControlComponent}>
        Edit Item
    </button>

    {showEditControls ? (
        <div className="edit-item-container">
        <h3 className="edit-control-header">Edit Item</h3>
        <div>
            <select onChange={prePopulateTextFields}>
            <option>...</option>
            {props.items.map((value) => {
                return (
                <option  value={value.name}>
                    {value.name}
                </option>
                );
            })}
            </select>
        </div>

        <input value={'remember'} type="text" className="name-input" placeholder="Name" />
        <input className="price-input" placeholder="Price" />
        <input className="image-input" placeholder="Image" />
        <input className="description-input" placeholder="Description" />
        <button className="submit-button">Submit</button>
        </div>
    ) : null}
    </div>
);
};

//========================================================================================//
//========================================================================================//

export default EditControlComponent;
