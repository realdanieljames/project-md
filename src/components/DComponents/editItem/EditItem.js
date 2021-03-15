import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./EditItem.css";
import DisplayItems from "../../MComponents/displayItems/DisplayItems";
import logo from "./EnergyFoodLogo.png";

//========================================================================================//
//========================================================================================//

const EditControlComponent = (props) => {
const [showEditControls, setShowEditControls] = useState(false);
const [showAddControls, setShowAddControls] = useState(false);
let [tempName, setTempName] = useState("");
let [tempPrice, setTempPrice] = useState("");
let [tempImageLink, setTempImageLink] = useState("");
let [tempDescription, setTempDescription] = useState("");
let [
    showSelectOptionsDropdownDiv,
    setShowSelectOptionsDropdownDiv,
] = useState(true);
let [submitButtonDescription, setSubmitButtonDescription] = useState("SAVE");
let [tempProps, setTempProps] = useState([...props.items]);
let [addProductTab, setAddProductTab] = useState(false);
let [editProductTab, setEditProductTab] = useState(false);

//========================================================================================//
//========================================================================================//

const openEditControlComponent = () => {
    if (showEditControls || showAddControls === true) {
    setShowEditControls(false);
    setShowAddControls(false);
    } else {
    setShowEditControls(true);
    setShowAddControls(true);
    }
    clickEditButtonTab();
};

const openAddControlComponent = () => {
    if (showAddControls || showEditControls === true) {
    setShowAddControls(false);
    setShowEditControls(false);
    } else {
    setShowAddControls(true);
    setShowEditControls(true);
    }
    clickAddButtonTab();
};

//========================================================================================//

const prePopulateTextFields = (event) => {
    console.log(event.target.value);

    // props.items.map((value) => {

    // chooseItemToEdit()
    tempProps.map((value) => {
    if (event.target.value === value.name) {
        setTempName(value.name);
        setTempPrice(value.price);
        setTempImageLink(value.imageLink);
        setTempDescription(value.description);
    }
    });
};

//========================================================================================//

// const chooseItemToEdit =(click)=>{
//     console.log(click)
//     tempProps.map((value)=>{console.log(value)})
// }

//========================================================================================//
const onButtonSubmit = (click) => {
    click.preventDefault();
    // console.log(click);
    // console.log(props.items);
    if (addProductTab === true) {
    const addedItem = {
        id: uuidv4(),
        name: tempName,
        price: tempPrice,
        imageLink: tempImageLink,
        description: tempDescription,
    };

    const newArr = [...tempProps, addedItem];
    setTempProps(newArr);
    console.log(newArr);
    // newArr.map((value) => {
    // console.log(value);
    // });
    }

    if (editProductTab === true) {
    // console.log(click)

    let editedItem = {
        id: "",
        name: tempName,
        price: tempPrice,
        imageLink: tempImageLink,
        description: tempDescription,
    };
    // };
    tempProps.map((value) => {
        if (value.name !== tempName) {
        setTempProps([(editedItem.name = tempName)]);
        // editedItem.name=tempName
        }
        console.log(value);
    });
    console.log(editedItem);
    return editedItem;
    }
};
//========================================================================================//

const selectOptionsDropdownDiv = (
    <div className="select-options">
    <select onChange={prePopulateTextFields}>
        <option>Select A Product</option>
        {/* {props.items.map((value) => { */}
        {tempProps.map((value) => {
        return (
            <option value={value.name} key={value.id}>
            {value.name}
            </option>
        );
        })}
    </select>
    </div>
);
//========================================================================================//

const clickAddButtonTab = () => {
    setAddProductTab(true);
    setEditProductTab(false);
    setShowSelectOptionsDropdownDiv(false);
    setSubmitButtonDescription("ADD");
};
//========================================================================================//
const clickEditButtonTab = () => {
    // e.preventDefault();
    setEditProductTab(true);
    setAddProductTab(false);
    setShowSelectOptionsDropdownDiv(true);
    setSubmitButtonDescription("SAVE");
};

//========================================================================================//

const switchTabBorderBottomStyle = () => {
    let styleObj = {};
    if (addProductTab === true) {
    styleObj = {
        borderBottomColor: "yellow",
    };
    } else {
    styleObj = {};
    }
    return styleObj;
};
//========================================================================================//
//========================================================================================//
return (
    <div>
    <div className="open-buttons">
        <button className="edit-item-button" onClick={openAddControlComponent}>
        Add Product
        </button>
        <button className="edit-item-button" onClick={openEditControlComponent}>
        Edit Item
        </button>
    </div>

    <div>
        {showEditControls || showAddControls ? (
        <div className="overall-item-container">
            <form className="edit-item-container">
            <div className="form-heading">
                <img className="logo" src={logo} />
                <h2>Energy Food</h2>
            </div>
            <nav className="container-navbar">
                <div
                className="add-control-header"
                onClick={clickAddButtonTab}
                style={switchTabBorderBottomStyle()}
                >
                <h3>ADD PRODUCT</h3>
                </div>
                <div
                className="edit-control-header"
                onClick={clickEditButtonTab}

                // style={{borderBottomColor: 'red'}}
                >
                <h3>EDIT PRODUCT</h3>
                </div>
            </nav>
            {showSelectOptionsDropdownDiv ? (
                selectOptionsDropdownDiv
            ) : (
                <span className="select-options">Add A Product</span>
            )}

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
                onChange={(event) => {
                setTempImageLink(event.target.value);
                console.log(event.target.value);
                }}
            />

            <input
                className="description-input"
                defaultValue={tempDescription}
                placeholder="Description"
                onChange={(event) => {
                setTempDescription(event.target.value);
                console.log(event.target.value);
                }}
            />

            <button className="submit-button" onClick={onButtonSubmit}>
                {submitButtonDescription}
            </button>
            </form>
            <div className="display-items"></div>
            <DisplayItems
            items={tempProps}
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
