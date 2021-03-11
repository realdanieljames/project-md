import React, { useState, useRef } from "react";
import "./EditItem.css";
import DisplayItems from "../../MComponents/displayItems/DisplayItems";
import AddItem from "../addItem/AddItem";

//========================================================================================//
//========================================================================================//

const EditControlComponent = (props) => {
const [showEditControls, setShowEditControls] = useState(false);
let [tempName, setTempName] = useState("");
let [tempPrice, setTempPrice] = useState("");
let [tempImageLink, setTempImageLink] = useState("");
let [tempDescription, setTempDescription] = useState("");
let [
    showSelectOptionsDropdownDiv,
    setShowSelectOptionsDropdownDiv,
] = useState(true);

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

const selectOptionsDropdownDiv = (
    <div className="select-options">
    <select onChange={prePopulateTextFields}>
        <option>Select A Product</option>
        {props.items.map((value) => {
        return (
            <option value={value.name} key={value.id}>
            {value.name}
            </option>
        );
        })}
    </select>
    </div>
);

const clickAddButtonTab =()=>{
    setShowSelectOptionsDropdownDiv(false)
}
const clickEditButtonTab =()=>{
    setShowSelectOptionsDropdownDiv(true)
}
//========================================================================================//
//========================================================================================//
return (
    <div>
    <button className="edit-item-button" onClick={openEditControlComponent}>
        Edit Item
    </button>

    <div>
        {showEditControls ? (
        <div className="overall-item-container">
            <form className="edit-item-container">
            <nav className="container-navbar">
                <div className="add-control-header" onClick={clickAddButtonTab}>
                <h3>ADD PRODUCT</h3>
                </div>
                <div className="edit-control-header" onClick={clickEditButtonTab}>
                <h3>EDIT PRODUCT</h3>
                </div>
            </nav>
            {showSelectOptionsDropdownDiv ? selectOptionsDropdownDiv: null}
           

            {/* <div className="select-options">
                <select onChange={prePopulateTextFields}>
                <option>Select A Product</option>
                {props.items.map((value) => {
                    return (
                    <option value={value.name} key={value.id}>
                        {value.name}
                    </option>
                    );
                })}
                </select>
            </div> */}

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
                placeholder="Price ($)"
                onChange={(event) => {
                setTempPrice(event.target.value);
                console.log(event.target.value);
                }}
            />

            <input
                className="image-input"
                defaultValue={tempImageLink}
                placeholder="Image Url"
            />

            <input
                className="description-input"
                defaultValue={tempDescription}
                placeholder="Description"
            />

            <button className="submit-button" onClick={onButtonSubmit}>
                Save
            </button>
            </form>
            <div className="display-items"></div>
            {/* <DisplayItems
            items={props.items}
            prePopulateTextFields={prePopulateTextFields}
            /> */}
        </div>
        ) : null}
    </div>
    </div>
);
};

//========================================================================================//
//========================================================================================//

export default EditControlComponent;
