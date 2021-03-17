import React, { useState, useContext } from "react";

import "./AddAndEditProduct.css";
import DisplayItems from "../../MComponents/displayItems/DisplayItems";
import itemContext from "../../MComponents/context/ItemContext";
import logo from "./EnergyFoodLogo.png";

//========================================================================================//
//========================================================================================//
//========================================================================================//

const AddAndEditProduct = (props) => {

let [tempID, setTempID] = useState("");
let [tempName, setTempName] = useState("");
let [tempPrice, setTempPrice] = useState("");
let [tempImageLink, setTempImageLink] = useState("");
let [tempDescription, setTempDescription] = useState("");
let [
    showSelectOptionsDropdownDiv,
    setShowSelectOptionsDropdownDiv,
] = useState(true);
let [submitButtonDescription, setSubmitButtonDescription] = useState("SAVE");

let [itemList, setItemList] = useState([...props.stateValues.items]);
let [addProductTab, setAddProductTab] = useState(false);
let [editProductTab, setEditProductTab] = useState(true);

//========================================================================================//
//========================================================================================//
//========================================================================================//
// setShowAddControls(true)
const clickAddButtonTab = () => {
    setAddProductTab(true);
    setEditProductTab(false);
    setShowSelectOptionsDropdownDiv(false);
    setSubmitButtonDescription("ADD");
};

//========================================================================================//
const clickEditButtonTab = () => {
    setEditProductTab(true);
    setAddProductTab(false);
    setShowSelectOptionsDropdownDiv(true);
    setSubmitButtonDescription("SAVE");
};

//========================================================================================//

const prePopulateTextFields = (event) => {
    itemList.map((value) => {
    if (event.target.value === value.name) {
        setTempID(value.id);
        setTempName(value.name);
        setTempPrice(value.price);
        setTempImageLink(value.imageLink);
        setTempDescription(value.description);
    }
    });
};
//========================================================================================//

const selectOptionsDropdownDiv = (
    <div className="select-options">
    <select onChange={prePopulateTextFields}>
        <option>Select A Product</option>

        {itemList.map((value) => {
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

const onButtonSubmit = (click) => {
    click.preventDefault();

    if (addProductTab === true) {
    const addedItem = {
        id: (itemList.length + 1).toString(),
        name: tempName,
        price: tempPrice,
        imageLink: tempImageLink,
        description: tempDescription,
    };
    const newArr = [...itemList, addedItem];
    setItemList(newArr);
    }
    if (editProductTab === true) {
    onEditButtonSubmit(tempID);
    }
};

//========================================================================================//

const onEditButtonSubmit = async (id) => {
    const arr = [
    itemList.map((value) => {
        if (value.id === id) {
        return {
            id: id,
            name: tempName,
            price: tempPrice,
            imageLink: tempImageLink,
            description: tempDescription,
        };
        } else {
        return value;
        }
    }),
    ];

    setItemList(arr[0]);
};

const handleDeleteItem = (id) => {
    let newItems = itemList.filter((item) => item.id !== id);
    setItemList(newItems);
};
//========================================================================================//
//========================================================================================//
//========================================================================================//
return (
    <div>

    <div className="overall-item-container">
        <form className="edit-item-container">
        <div className="form-heading">
            <img className="logo" src={logo} />
            <h1>Energy Food</h1>
        </div>
        <nav className="container-navbar">
            <div
            className="add-control-header"
            onClick={clickAddButtonTab}
            style={addProductTab ? { color: "red" } : null}
            >
            <h3>ADD PRODUCT</h3>
            </div>
            <div
            className="edit-control-header"
            onClick={clickEditButtonTab}
            style={editProductTab ? { color: "red" } : null}
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
            }}
        />

        <input
            className="price-input"
            defaultValue={tempPrice}
            placeholder="Price ($)"
            onChange={(event) => {
            setTempPrice(event.target.value);
            }}
        />

        <input
            className="image-input"
            defaultValue={tempImageLink}
            placeholder="Image Url"
            onChange={(event) => {
            setTempImageLink(event.target.value);
            }}
        />

        <input
            className="description-input"
            defaultValue={tempDescription}
            placeholder="Description"
            onChange={(event) => {
            setTempDescription(event.target.value);
            }}
        />

        <button className="submit-button" onClick={onButtonSubmit}>
            {submitButtonDescription}
        </button>
        </form>

        <itemContext.Provider
        value={{
            state: props.stateValues,
            items: itemList,
            handleDeleteItem: props.handleDeleteItem,
            handleChangePageNumber: props.handleChangePageNumber,
            handleClickNext: props.handleClickNext,
            handleClickPrevious: props.handleClickPrevious,

        }}
        >

        <DisplayItems
            className="list-container"
            items={itemList}
            handleDeleteItem={handleDeleteItem}
        />
        </itemContext.Provider>
    </div>


    </div>
);
};

//========================================================================================//
//========================================================================================//

export default AddAndEditProduct;
