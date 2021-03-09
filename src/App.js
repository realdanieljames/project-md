import { Component } from "react";
import "./App.css";
import EditControlComponent from "./components/DComponents/EditControlComponent/EditControlComponent";

class App extends Component {
  state = {
    items: [
      {
        name: "1",
        price: "1",
        imageLink: "1.jpeg",
        description: "This Item represents the first (1) item on the list",
      },
      {
        name: "2",
        price: "2",
        imageLink: "2.jpeg",
        description: "This Item represents the second (2) item on the list",
      },
      {
        name: "3",
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
        <EditControlComponent items={this.state.items} />
      </div>
    );
  }
}

export default App;
