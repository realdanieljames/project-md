import React from "react";
import "./DisplayItems.css";
import Item from '../item/Item.js'

const DisplayItems = (props) => {
    console.log(props.items)
    return (
        <div className='display-container'>
            This is a list how abou tnow
            {props.items.map(item => <Item key={item.id} item={item} />
                // return (
                //     <>
                //         <h1>{item.name}</h1>
                //         <h1>{item.id}</h1>
                //         <h1>{item.price}</h1>
                //         <img src={item.imageLink}></img>
                //         <h1>{item.description}</h1>
                //     </>
                // )
            )}
        </div>
    )



};

export default DisplayItems;







//     //Daniel code
//        const  deleteCard=()=>{


//         }
//     console.log(props);
//     return (
//         <div className="items-container">
//         {props.items.map((value) => {
//             return (
//             <div key={value.id} className="single-item-container">
//                 <button className="close-item-display-button"> X</button>
//                 <img className="item-image" src={value.imageLink}></img>
//                 <div className="item-name">{value.name}</div>
//                 {/* <div className="item-id">{value.id}</div> */}
//                 <div className="item-price">{value.price}</div>
//                 <div className="item-description">{value.description}</div>
//             </div>
//             );
//         })}
//         </div>
//     );
// };

// export default DisplayItems;
