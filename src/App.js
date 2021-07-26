import React, { Component } from "react";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Modal from "./components/modal/Modal";
import Searchbar from "./components/searchbar/Searchbar";

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onSubmit = (e) => {
    console.log(e);
    console.log(e.target);
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            // largeImageURL={largeImageURL}
          />
        )}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
