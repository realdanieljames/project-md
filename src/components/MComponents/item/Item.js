
import React from 'react'
import './item.css'

const handleDeleteItem = (id) => {
    console.log(id)
}

export default function Item(props) {
    console.log(props.item.name)
    return (
        <div>
            <img src={props.item.imageLink}></img>
            <div className='description'>
                <h2>{props.item.name}</h2>
                <p>{props.item.id}</p>
                <p>{props.item.description}</p>
            </div>
            <h1 className='price'>{props.item.price}</h1>
            <button onClick={handleDeleteItem(props.item.id)}>X</button>
        </div>
    )
}
