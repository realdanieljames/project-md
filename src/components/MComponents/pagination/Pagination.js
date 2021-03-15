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
                onClick={handleClickPrevious}>PREVIOUS</button>

            {pageButtons.map(item => (
                <button
                    className={item.isActive === true ? 'green' : ''}
                    onClick={() => handleChangePageNumber(item)}>{item.number}</button>))}

            <button
                disabled={items.length < endIndex ? true : false}
                className='next-previous'
                onClick={handleClickNext}>NEXT</button>
        </div>
    )
}
