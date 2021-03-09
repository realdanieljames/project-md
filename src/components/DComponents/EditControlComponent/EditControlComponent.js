import React, { useState } from "react";
import "./EditControlComponent.css";

//========================================================================================//
//========================================================================================//

const EditControlComponent = (props) => {
const [showEditControls, setShowEditControls] = useState(false);
props.items.map((value) => {

});
//========================================================================================//
//========================================================================================//

const openEditControlComponent = () => {
    if (showEditControls === true) {
    setShowEditControls(false);
    } else {
    setShowEditControls(true);
    }
};

const prePopulateTextFields = () => {
    console.log('level');
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
            <select>
            <option>...</option>
            {props.items.map((value) => {
                return (
                <option onClick={prePopulateTextFields} value={value.name}>
                    {value.name}
                </option>
                );
            })}
            </select>
        </div>

        <input className="name-input" placeholder="Name" />
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
