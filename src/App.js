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
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fortmyersgroceryservice.com%2Fuploads%2F1%2F5%2F5%2F4%2F1554554%2Fs257261684267286_p6602_i3_w500.jpeg&f=1&nofb=1",
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: uuidv4(),
        name: "Spinach Bunch",
        price: "$4.99",
        imageLink: `https://pcdn.columbian.com/wp-content/uploads/2020/06/0619_met_spinach-1226x0-c-default.jpg`,
        description:
          "Spinach is a leafy green flowering plant native to central and western Asia.",
      },
      {
        id: uuidv4(),
        name: "Grape Fruit",
        price: "$7.99",
        imageLink: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbioluxia.com%2Fgestion%2Fwp-content%2Fuploads%2F2014%2F11%2Fgrapefruit1.jpg&f=1&nofb=1`,
        description:
          "A subtropical citrus tee known for its relatively large sour to semisweet.",
      },
      {
        id: uuidv4(),
        name: "Yellow Watermelon",
        price: "$6.99",
        imageLink: `https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2019%2F08%2Fgettyimages-1164860623-2000.jpg`,
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: uuidv4(),
        name: "Carrot",
        price: "$7.99",
        imageLink: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-BWMvlNaLdtE%2FTs8Le9dojWI%2FAAAAAAAAAuQ%2FGTVVGx8iBk4%2Fs1600%2F34Carrots.gif&f=1&nofb=1`,
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
        <div className="grant-container">
          {/* <EditItem items={this.state.items} /> */}
          <AddAndEditProduct items={this.state.items} />
          <div className="control-container">control-container</div>
          <itemContext.Provider value={{
            state: this.state,
            handleDeleteItem: this.handleDeleteItem,
            handleChangePageNumber: this.handleChangePageNumber,
            handleClickNext: this.handleClickNext,
            handleClickPrevious: this.handleClickPrevious,
          }}>
            <DisplayItems className="list-container" />
          </itemContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;