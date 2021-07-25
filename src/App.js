import React, { Component } from "react";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Searchbar from "./components/searchbar/Searchbar";

class App extends Component {
  state = {};

  onSubmit = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
