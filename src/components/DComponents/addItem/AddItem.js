import React, {useState}from "react";


const AddItem = (props) => {

    const[showAddControls, setShowAddControls]= useState(false)


    const openAddControlComponent = () => {
        if (showAddControls === true) {
            setShowAddControls(false);
        } else {
            setShowAddControls(true);
        }
    };

return (
    <div>
    <button
        className="add-item-button"
        onClick={openAddControlComponent}
    >
        Add Product
    </button>

    {showAddControls ? (
        <div>
        <input className="name-input" placeholder="Name"></input>
        <input  className="price-input"  placeholder="Price ($)"></input>
        <input className="image-input"    placeholder="Image Url"></input> 
        <input className="description-input" placeholder="Description"></input>
        </div>
    ) : null}
    </div>
);
};

export default AddItem;
