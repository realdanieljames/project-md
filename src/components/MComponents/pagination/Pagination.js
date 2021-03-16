import React, { useContext } from "react";
import itemContext from '../context/ItemContext.js'
import './pagination.css'

export default function Pagination(props) {

    const context = useContext(itemContext)
    const {
        items,
        startIndex,
        pageButtons
    } = context.state
    

    const {
        handleChangePageNumber,
        handleClickNext,
        handleClickPrevious
    } = context

        const endIndex = startIndex + 5

    return (
        <div className='pagination'>
            <button
                disabled={startIndex === 0 ? true : false}
                className={startIndex === 0 ? 'inactive' : 'active'}
                onClick={handleClickPrevious}>ᐸ  PREVIOUS</button>

            {/* {pageButtons.map(item => (
                <button
                    className={item.isActive === true ? 'selected' : 'default'}
                    onClick={() => handleChangePageNumber(item)}>{item.number}</button>))} */}

            <button
                disabled={items.length < endIndex ? true : false}
                // disabled={items.length < endIndex ? true : false}
                className={items.length < endIndex ? 'inactive' : 'active'}
                // className={items.length < endIndex ? 'inactive' : 'active'}
                onClick={handleClickNext}>NEXT ᐳ</button>
        </div>
    )
}
