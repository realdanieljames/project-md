import React, { useContext } from 'react'
import './item.css'
import itemContext from '../context/ItemContext.js'
import '../../../../puplic/close-icon.svg'
// import CloseIcon from '@material-ui/icons/Close';



export default function Item(props) {

    // pass fucntion from App.js using context
    const context = useContext(itemContext)
    const handleDeleteItem = context.handleDeleteItem

    // pass a single item object from DisplayItems using props
    const { id, name, price, imageLink, description } = props.item

    return (
        <div className='item-wrapper'>
            <img className='item-img' src={imageLink}></img>
            <div className='description-wrapper'>
                <p className='item-name'>{name}</p>
                <p className='item-description'># {id} </p>
                <p className='item-description'>{description}</p>
            </div>
            <h1 className='item-price'>{price}</h1>

            {/* <button className='close-btn' onClick={() => handleDeleteItem(id)}><CloseIcon fontSize="small" color="MuiIcon-colorAction"/></button> */}
            <button className='close-btn' onClick={() => handleDeleteItem(id)}>X</button>
        </div>
    )
}
