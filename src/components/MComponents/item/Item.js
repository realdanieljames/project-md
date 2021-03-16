import React, { useContext } from 'react'
import './item.css'
import itemContext from '../context/ItemContext.js'
import '../../../../puplic/close-icon.svg'


export default function Item(props) {

    // pass fucntion from App.js using context
    const context = useContext(itemContext)
    const handleDeleteItem = context.handleDeleteItem

    // pass a single item object from DisplayItems using props
    const { id, name, price, imageLink, description } = props.item

    return (
        
        <div className='single-item'>
            <img alt= 'fruit' className='item-img' src={imageLink}></img>
            <div className='description-wrapper'>
                <p className='item-name'>{name}</p>
                <p className='item-description'># 0{props.index} </p>
                <p className='item-description'>{description}</p>
            </div>
            <h1 className='item-price'>{price}</h1>

            <button className='close-btn' onClick={() => handleDeleteItem(id)}>✕</button>
        </div>
        
    )
}
