import React from "react";
const itemContext = React.createContext({
    items: '',
    handleDeleteItem: '',
    startIndex: '',
    totalPages: [],
})

export default itemContext