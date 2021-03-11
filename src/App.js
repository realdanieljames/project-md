import { Component } from "react";
import "./App.css";



import EditItem from "./components/DComponents/editItem/EditItem";
import DisplayItems from "./components/MComponents/displayItems/DisplayItems";

class App extends Component {
  state = {
    items: [
      {
        id: "#1",
        name: "Golden Apple Bag",
        price: "$7.99",
        imageLink:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fortmyersgroceryservice.com%2Fuploads%2F1%2F5%2F5%2F4%2F1554554%2Fs257261684267286_p6602_i3_w500.jpeg&f=1&nofb=1",
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: "#2",
        name: "Spinach Bunch",
        price: "$4.99",
        imageLink: `https://5.imimg.com/data5/GL/JT/UT/SELLER-90542357/fresh-spinach-500x500.jpg`,
        description: "Spinach is a leafy green flowering plant native to central and western Asia."
      },
      {
        id: "#3",
        name: "Grape Fruit",
        price: "$7.99",
        imageLink: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbioluxia.com%2Fgestion%2Fwp-content%2Fuploads%2F2014%2F11%2Fgrapefruit1.jpg&f=1&nofb=1`,
        description: "A subtropical citrus tee known for its relatively large sour to semisweet.",
      },
      {
        id: "#4",
        name: "Yellow Watermelon",
        price: "$6.99",
        imageLink: `https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2019%2F08%2Fgettyimages-1164860623-2000.jpg`,
        description: "Harvested in California. Organic, sweet, and tangy.",
      },
      {
        id: "#5",
        name: "Carrot",
        price: "$7.99",
        imageLink: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-BWMvlNaLdtE%2FTs8Le9dojWI%2FAAAAAAAAAuQ%2FGTVVGx8iBk4%2Fs1600%2F34Carrots.gif&f=1&nofb=1`,
        description: "A root vegetable, usually orange in color.",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        {/* <EditItem items={this.state.items} /> */}
        <div className="control-container">control-container</div>
        <DisplayItems items={this.state.items}/>
      </div>
    );
  }
}

export default App;
