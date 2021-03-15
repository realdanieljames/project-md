import React, { useContext, useState } from "react";
import "./DisplayItems.css";
import Item from '../item/Item.js'
import itemContext from '../context/ItemContext.js'
import IconContext from '../context/IconContext.js'
import { SearchIcon, SearchOutlined, DeleteOutline } from '@material-ui/icons';
import { InputBase, IconButton, InputAdornment, TextField } from '@material-ui/core'
// import { SearchIcon } from '@material-ui/icons'
const DisplayItems = (props) => {


    const context = useContext(itemContext)
    const  startIndex  = context.startIndex
    


    const [searchTerm, SetSearchTerm] = useState('')
    const [currStartIndex, setCurrStartIndex] = useState(startIndex)

    const handleClickNext = () => {
        console.log(startIndex)
    }
    return (
        <div className='display-container'>

            <div className='search-container'>
                {/* <IconButton >
                    <SearchOutlined color='secondary' />
                </IconButton>
                <InputBase
                    onChange={(event) => SetSearchTerm(event.target.value)}>
                </InputBase> */}

                <TextField
                    style={{ color: 'green', margin: 16, width: 374 }}
                    size='large'
                    onChange={(event) => SetSearchTerm(event.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlined style={{ color: 'green' }} />
                            </InputAdornment>
                        ),
                    }}
                />
                {/* <div className='search-icon'>
                    <SearchIcon
                        fontSize="large"
                        style={{ color: 'green' }} />
                </div>
                <input
                    placeholder='Search'
                    onChange={(event) => SetSearchTerm(event.target.value)}>
                </input> */}
            </div>
            {context.items
                .filter(item => {
                    // If search term is empty, return all items
                    if (searchTerm === '') {
                        return item
                    }
                    // Return all items that include search term in its name
                    else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item
                    }
                })
                // Map All items that qualify the filter above
                .map(item => <Item key={item.id} item={item} />)}
            {/* <button className={`${context.items.length < 5}`} >PREVIOUS</button> */}
            <button class='next' onClick={handleClickNext}>NEXT</button>
            {/* <button class='next' onClick={handleClickNext}>NEXT</button> */}
        </div>
    )

};

export default DisplayItems;




