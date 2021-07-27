import React, { Component } from "react";
import Searchbar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Modal from "./components/modal/Modal";
import Loader from "react-loader-spinner";
import ApiService from "./services/ApiService";
import Button from "./components/button/Button";

class App extends Component {
  state = {
    photos: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    largeImage: "",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPhotos();
    }
  }

  addLargeImg = (largeImgUrl) => {
    this.setState({ largeImage: largeImgUrl });
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      photos: [],
      error: null,
    });
  };

  fetchPhotos = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    ApiService.fetchPhotos(options)
      .then((photos) => {
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...photos],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  toggleModal = () => {
    this.setState(({ largeImage }) => ({
      largeImage: !largeImage,
    }));
  };

  render() {
    const { photos, isLoading, error, largeImage } = this.state;
    const shouldRenderLoadMoreBtn = photos.length > 0 && !isLoading;

    return (
      <div className="App">
        {error && <h2>Something went wrong. Try again</h2>}
        {largeImage && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImage} />
        )}
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery
          photos={this.state.photos}
          addLargeImg={this.addLargeImg}
        />

        {isLoading && <Loader />}

        {shouldRenderLoadMoreBtn && <Button fetchPhotos={this.fetchPhotos} />}
      </div>
    );
  }
}

export default App;
