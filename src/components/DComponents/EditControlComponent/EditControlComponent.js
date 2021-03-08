import React from 'react'

const EditControlComponent = () => {


    const openEditControlComponent = ()=>{
        console.log('button')

    }
    return (
        <div>
            <button onClick={openEditControlComponent}>Edit Item</button>

        </div>
    )
}

export default EditControlComponent
