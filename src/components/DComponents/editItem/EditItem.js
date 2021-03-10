import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./EditItem.css";

//========================================================================================//
//========================================================================================//

const EditControlComponent = (props) => {
const [showEditControls, setShowEditControls] = useState(false);

console.log(props);
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
        <form className="edit-item-container">
        <h3 className="edit-control-header">Edit Item</h3>
        <div>
            <select onChange={prePopulateTextFields}>
            <option>...</option>
            {props.items.map((value) => {
                return <option value={value.name}>{value.name}</option>;
            })}
            </select>
        </div>
        

        <TextField

            variant="filled"
            margin="normal"
            defaultValue={"remember"}
            type="text"
            className="name-input"
            placeholder="Name"
        />
        <TextField

            variant="filled"
            margin="normal"
            className="price-input"
            placeholder="Price"
        />
        <TextField
            variant="filled"
            margin="normal"
            className="image-input"
            placeholder="Image"
        />
        <TextField
            variant="filled"
            margin="normal"
            className="description-input"
            placeholder="Description"
        />


        <Button className="submit-button" variant="contained">Submit</Button>
        </form>
    ) : null}
    </div>
);
};

//========================================================================================//
//========================================================================================//

export default EditControlComponent;
