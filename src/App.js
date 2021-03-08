import { Component } from "react";
import "./App.css";
import EditControlComponent from "./components/DComponents/EditControlComponent/EditControlComponent";

class App extends Component {
  state = {
    item: [
      {
        Name: "1",
        Price: "1",
        ImageLink: "1",
        Description: "This Item represents the first (1) item on the list",
      },
      {
        Name: "",
        Price: "",
        ImageLink: "",
        Description: "This Item represents the second (2) item on the list",
      },
      {
        Name: "",
        Price: "",
        ImageLink: "",
        Description: "This Item represents the third (3) item on the list",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Grocery Store Catalogue</h1>
        <EditControlComponent />
      </div>
    );
  }
}

export default App;
