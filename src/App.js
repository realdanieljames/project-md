import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import DisplayItems from "./components/MComponents/displayItems/DisplayItems";
import itemContext from './components/MComponents/context/ItemContext.js'


import AddAndEditProduct from "./components/DComponents/AddAndEditProductComponent/AddAndEditProduct";


class App extends Component {
  state = {
    items: [
      {
        id: uuidv4(),
        name: "Golden Apple Bag",
        price: "$7.99",
        imageLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97YyToOrhxY_-mot9CfuIH-D_79WiMVy_Fg&usqp=CAU",
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: uuidv4(),
        name: "Spinach Bunch",
        price: "$4.99",
        imageLink: `https://5.imimg.com/data5/GL/JT/UT/SELLER-90542357/fresh-spinach-500x500.jpg`,
        description: "Spinach is a leafy green flowering plant native to central and western Asia."
      },
      {
        id: uuidv4(),
        name: "Grape Fruit",
        price: "$7.99",
        imageLink: `https://i5.walmartimages.com/asr/c23d870b-225f-4818-afe3-0b4add48afe6.b78126a7bd277fd29afbeb21dac10e04.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff`,
        description: "A subtropical citrus tee known for its relatively large sour to semisweet.",
      },
      {
        id: uuidv4(),
        name: "Yellow Watermelon",
        price: "$6.99",
        imageLink: `https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_08951510-bf3c-442b-91f1-cd5730b27b0a.jpg`,
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: uuidv4(),
        name: "Carrot",
        price: "$7.99",
        imageLink: `https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/carrots_commodity-page.png`,
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: uuidv4(),
        name: "Strawberry",
        price: "$7.99",
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVo2Xo88a4Xaro4tMmdDi85MArLEHoqDtnw&usqp=CAU',
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: uuidv4(),
        name: "Yellow Pepper",
        price: "$7.99",
        imageLink: `https://smithsfruitstores.co.uk/wp-content/uploads/2020/06/yellow-pepper.jpg`,
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: uuidv4(),
        name: "BlueBerry",
        price: "$7.99",
        imageLink: `https://babelfruits.com/wp-content/uploads/2020/01/Blueberry-1.jpg`,
        description: "A root vegetable, usually orange in color.",
      },
      {
        id: uuidv4(),
        name: "Watermelon",
        price: "$7.99",
        imageLink: `https://5.imimg.com/data5/SELLER/Default/2020/9/UD/LW/LM/13355905/watermelon-500x500.jpg`,
        description: "A root vegetable, usually orange in color.",
      },
    ],
    pageButtons: [],
    startIndex: 0,

  };

  componentDidMount = () => {
    let { items } = this.state
    // Get total pages base on array length
    let totalPages = Math.ceil(items.length / 5)

    // Create an array of pages base on total pages, set last page to be active
    let arr = []
    for (let i = 1; i <= totalPages; i++) {
      if (i === totalPages) {
        arr.push({ number: i, isActive: true })
      } else {
        arr.push({ number: i, isActive: false })
      }
    }
    //Set startIndex tobe the startIndex of the last page
    this.setState({
      ...this.state,
      pageButtons: arr,
      startIndex: totalPages * 5 - 5
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
    this.setState((prevState) => {
      return {
        ...this.state,
        startIndex: prevState.startIndex + 5,
      }
    })
  }


  handleClickPrevious = () => {
    // If startIndex = 0, remain 0
    if (this.state.startIndex === 0) {
      this.setState({
        ...this.state,
        startIndex: 0
      })
    } else {
      // If startIndex != 0, jump 5 index previous
      this.setState((prevState) => {
        return {
          ...this.state,
          startIndex: prevState.startIndex - 5
        }
      })
    }


  }

  handleChangePageNumber = (item) => {
    let copyPageButtons = [...this.state.pageButtons]
    let newPageButtons = copyPageButtons.map(page => {
      if (page.number === item.number) {
        page.isActive = true
        return page
      } else {
        page.isActive = false
        return page
      }
    })

    this.setState({
      ...this.state,
      startIndex: item.number * 5 - 5,
      pageButtons: newPageButtons
    })
  }



  render() {
    return (
      <div className="App">
        {/* <div className="grant-container"> */}
        <div className="overall-item-container">
          {/* <div className="control-container"> */}
          <div className="edit-item-container">
            <AddAndEditProduct items={this.state.items} />
          </div>
          <div className="display-items">
            <itemContext.Provider value={{
              state: this.state,
              handleDeleteItem: this.handleDeleteItem,
              handleChangePageNumber: this.handleChangePageNumber,
              handleClickNext: this.handleClickNext,
              handleClickPrevious: this.handleClickPrevious,
            }}>
              {/* <DisplayItems className="list-container" /> */}
              <DisplayItems />
            </itemContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;