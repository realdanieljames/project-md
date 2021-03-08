import React, { useState } from "react";
import "./EditControlComponent.css";

//========================================================================================//
//========================================================================================//

const EditControlComponent = (props) => {


const [showEditControls, setShowEditControls] = useState(false);

//========================================================================================//
//========================================================================================//

const openEditControlComponent = () => {
    if (showEditControls === true) {
    setShowEditControls(false);
    } else {
    setShowEditControls(true);
    }
};
//========================================================================================//
//========================================================================================//
return (
    <div>
    <button onClick={openEditControlComponent}>Edit Item</button>

    {showEditControls ? (
        <div className="edit-item-container">
        <h3 className="edit-control-header">Edit Item</h3>

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
