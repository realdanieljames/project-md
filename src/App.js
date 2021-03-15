import { Component } from "react";
import "./App.css";
import { SearchIcon, SearchOutlined, DeleteOutline } from '@material-ui/icons';
import { InputBase, IconButton, InputAdornment, TextField, } from '@material-ui/core'



// import EditItem from "./components/DComponents/editItem/EditItem";
import DisplayItems from "./components/MComponents/displayItems/DisplayItems";
import itemContext from './components/MComponents/context/ItemContext.js'

class App extends Component {
  state = {
    items: [
      {
        id: "1",
        name: "Golden Apple Bag",
        price: "$7.99",
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97YyToOrhxY_-mot9CfuIH-D_79WiMVy_Fg&usqp=CAU",
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: "2",
        name: "Spinach Bunch",
        price: "$4.99",
        imageLink: `https://5.imimg.com/data5/GL/JT/UT/SELLER-90542357/fresh-spinach-500x500.jpg`,
        description: "Spinach is a leafy green flowering plant native to central and western Asia."
      },
      {
        id: "3",
        name: "Grape Fruit",
        price: "$7.99",
        imageLink: `https://i5.walmartimages.com/asr/c23d870b-225f-4818-afe3-0b4add48afe6.b78126a7bd277fd29afbeb21dac10e04.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff`,
        description: "A subtropical citrus tee known for its relatively large sour to semisweet.",
      },
      {
        id: "4",
        name: "Yellow Watermelon",
        price: "$6.99",
        imageLink: `https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_08951510-bf3c-442b-91f1-cd5730b27b0a.jpg`,
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: "5",
        name: "Carrot",
        price: "$7.99",
        imageLink: `https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/carrots_commodity-page.png`,
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: "6",
        name: "Strawberry",
        price: "$7.99",
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVo2Xo88a4Xaro4tMmdDi85MArLEHoqDtnw&usqp=CAU',
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: "7",
        name: "Yellow Pepper",
        price: "$7.99",
        imageLink: `https://smithsfruitstores.co.uk/wp-content/uploads/2020/06/yellow-pepper.jpg`,
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: "8",
        name: "BlueBerry",
        price: "$7.99",
        imageLink: `https://babelfruits.com/wp-content/uploads/2020/01/Blueberry-1.jpg`,
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: "9",
        name: "Watermelon",
        price: "$7.99",
        imageLink: `https://5.imimg.com/data5/SELLER/Default/2020/9/UD/LW/LM/13355905/watermelon-500x500.jpg`,
        description: "A root vegetable, usually orange in color.",
      },
    ],
    totalPages: [],
    startIndex: 0,
  };

  componentDidMount = () => {
    let { items } = this.state
    // Get total pages base on array length
    let pages = Math.ceil(items.length / 5)
    // Create an array of number base on total pages
    let arr = []
    for (let i = 1; i <= pages; i++) {
      arr.push(i)
    }
    // Set array in the state to match the new array
    this.setState({
      ...this.state,
      totalPages: arr
    })
  }

  handleDeleteItem = (id) => {
    let copyItems = [...this.state.items]
    // filter out the delete item
    let newItems = copyItems.filter(item => item.id !== id)
    this.setState({
      ...this.state,
      items: newItems
    })
  }

  handleClickNext = () => {
    console.log('next')
  }
  handleClickPrevious = () => {
    console.log('previous')

  }



  render() {
    return (
      <div className="App">
        <div className="grant-container">
          {/* <EditItem items={this.state.items} /> */}
          <div className="control-container">control-container</div>
          <itemContext.Provider value={{
            items: this.state.items,
            handleDeleteItem: this.handleDeleteItem,
            startIndex: this.state.startIndex
          }}>
            <DisplayItems className="list-container" />
          </itemContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
