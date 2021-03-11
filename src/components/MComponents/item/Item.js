
import React, { useState } from 'react'
import './item.css'




export default function Item(props) {
    console.log('props',props)
    const [array, setArray] = useState(props.item)

    const handleDeleteItem = (id) => {
        // console.log('props',props)
        console.log('outside setArray',props.item)
        setArray((prevState)=>{
            console.log('inside setArray',props.item)
            console.log('prevState',prevState)
        })
    }

    console.log(props.item.name)
    const { id, name, price, imageLink, description } = props.item
    return (
        <div>
            <img src={imageLink}></img>
            <div className='description'>
                <h2>{name}</h2>
                <p>{id}</p>
                <p>{description}</p>
            </div>
            <h1 className='price'>{price}</h1>
            <button onClick={() => handleDeleteItem(id)}>X</button>
        </div>
    )
}
