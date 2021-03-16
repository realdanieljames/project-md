import React, { useContext, useState } from "react";
import "./DisplayItems.css";
import Item from '../item/Item.js'
import Pagination from '../pagination/Pagination.js'
import itemContext from '../context/ItemContext.js'
import {SearchOutlined,  } from '@material-ui/icons';
import { InputAdornment, TextField } from '@material-ui/core'



const DisplayItems = (props) => {
    const context = useContext(itemContext)
    
    const {
        items,
        startIndex,
    } = context.state
    


console.log(props)


    const [searchTerm, SetSearchTerm] = useState('')



    return (
        <div className='display-container'>
            {/* ==========================Search bar=========================== */}
            <div className='search-wrapper'>
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
            </div>

            {/* ==========================Display Item=========================== */}
            <div className='items-wrapper' >

                {/* {props */}
                {props.items
                    .filter(item => {

                        // If search term is empty, return all items
                        if (searchTerm === '') {
                            return item
                        }
                        // If search term is included in the name of any item, return a list of that items
                        else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item
                        }
                    })
                    // Map All items that qualify the filter above
                    .map(item => <Item className='single-item' key={item.id} item={item} handleDeleteItem={props.handleDeleteItem}/>)
                    // Show only 5 items/page base on startIndex
                    .slice(startIndex, startIndex + 5)
                }

            </div>


            {/* ==========================Pagination=========================== */}
            <Pagination className='pagination-wrapper' items={props.items} />
        </div>
    )

};

export default DisplayItems;


