import React, { useState, useRef } from "react";
import "./EditItem.css";
import DisplayItems from "../displayItems/DisplayItems";

//========================================================================================//
//========================================================================================//

const EditControlComponent = (props) => {
const [showEditControls, setShowEditControls] = useState(false);
let [tempName, setTempName] = useState("");
let [tempPrice, setTempPrice] = useState("");
let [tempImageLink, setTempImageLink] = useState("");
let [tempDescription, setTempDescription] = useState("");

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
    props.items.map((value) => {
    if (event.target.value === value.name) {
        setTempName(value.name);
        setTempPrice(value.price);
        setTempImageLink(value.imageLink);
        setTempDescription(value.description);
    }
    });
};
const onButtonSubmit = (click) => {
    click.preventDefault();
    console.log(click.target.value);
    // console.log("uyess");
    console.log(tempName);
    console.log(tempPrice);
    console.log(tempImageLink);
    console.log(tempDescription);
};

//========================================================================================//
//========================================================================================//
return (
    <div>
    <button className="edit-item-button" onClick={openEditControlComponent}>
        Edit Item
    </button>

    <div >
        {showEditControls ? (
        <div className="overall-item-container">
            <form className="edit-item-container">
            <h3 className="edit-control-header">Edit Item</h3>
            <div className="select-options">
                <select onChange={prePopulateTextFields}>
                <option>...</option>
                {props.items.map((value) => {
                    return (
                    <option value={value.name} key={value.id}>
                        {value.name}
                    </option>
                    );
                })}
                </select>
            </div>

            <input
                className="name-input"
                defaultValue={tempName}
                placeholder="Name"
                type="text"
                onChange={(event) => {
                setTempName(event.target.value);
                console.log(event.target.value);
                }}
            />

            <input
                className="price-input"
                defaultValue={tempPrice}
                placeholder="Price"
                onChange={(event) => {
                setTempPrice(event.target.value);
                console.log(event.target.value);
                }}
            />

            <input
                className="image-input"
                defaultValue={tempImageLink}
                placeholder="Img Url"
            />

            <input
                className="description-input"
                defaultValue={tempDescription}
                placeholder="Description"
            />

            <button className="submit-button" onClick={onButtonSubmit}>
                Submit
            </button>

            </form>
            <div className="display-items"></div>
            <DisplayItems
            items={props.items}
            prePopulateTextFields={prePopulateTextFields}
            />
        </div>
        ) : null}
    </div>
    </div>
);
};

//========================================================================================//
//========================================================================================//

export default EditControlComponent;
