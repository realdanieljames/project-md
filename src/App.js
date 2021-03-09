import { Component } from "react";
import "./App.css";
import EditItem from "./components/DComponents/editItem/EditItem";

class App extends Component {
  state = {
    items: [
      {
        
        name: "one",
        price: "1",
        imageLink: "1.jpeg",
        description: "This Item represents the first (1) item on the list",
      },
      {
        name: "two",
        price: "2",
        imageLink: "2.jpeg",
        description: "This Item represents the second (2) item on the list",
      },
      {
        name: "three",
        price: "3",
        imageLink: "3.jpeg",
        description: "This Item represents the third (3) item on the list",
      },
    ]

  };


  render() {
    return (
      <div className="App">
        <h1>Grocery Store Catalogue</h1>
        <EditItem items={this.state.items} />
      </div>
    );
  }
}

export default App;
