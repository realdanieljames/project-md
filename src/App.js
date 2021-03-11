import { Component } from "react";
import "./App.css";
import DisplayItems from "./components/DComponents/displayItems/DisplayItems";
import EditItem from "./components/DComponents/editItem/EditItem";

class App extends Component {
  state = {
    items: [
      {
        id: "#01",
        name: "Golden Apple Bag",
        price: "$7.99",
        imageLink: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fortmyersgroceryservice.com%2Fuploads%2F1%2F5%2F5%2F4%2F1554554%2Fs257261684267286_p6602_i3_w500.jpeg&f=1&nofb=1",
        description: "This Item represents the first (1) item on the list",
      },
      {
        id: "#02",
        name: "Spinach",
        price: "$4.99",
        imageLink: `https://pcdn.columbian.com/wp-content/uploads/2020/06/0619_met_spinach-1226x0-c-default.jpg`,
        description: "This Item represents the second (2) item on the list",
      },
      {
        id: "#03",
        name: "three",
        price: "$3",
        imageLink: "3.jpeg",
        description: "This Item represents the third (3) item on the list",
      },
    ],
  };




  render() {
    return (
      <div className="App">
        <h1>Grocery Store Catalogue</h1>
        <EditItem
          items={this.state.items}
        />
        {/* <DisplayItems items={this.state.items} /> */}
      </div>
    );
  }
}

export default App;
