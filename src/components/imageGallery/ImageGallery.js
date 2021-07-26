import React, { Component } from "react";
import axios from "axios";

class ImageGallery extends Component {
  state = {
    ApiURL: "https://pixabay.com/api/",
    ApiKEY: "22378811-a58ebb6e61fd3d97b045a8b50",
    page: 1,
    keyWord: "sea",
    photos: [],
  };

  //keyWord это пропс, динамический, с 17й строки searchbar

  // ==================
  componentDidMount() {
    const { ApiURL, ApiKEY, keyWord, page } = this.state;
    const searchURL = `${ApiURL}?q=${keyWord}=${page}&key=${ApiKEY}&image_type=photo&orientation=horizontal&per_page=12`;
    console.log(searchURL);

    axios.get(searchURL).then((response) => {
      const photos = response.data;
      this.setState({ photos: photos.hits });
      console.log(this.state.photos);
      //тут массив из объектов
    });
  }
  // ==================

  render() {
    const photosArray = this.state.photos;
    console.log(photosArray);
    return (
      <ul className="ImageGallery">
        {photosArray.map((photo) => (
          <li className="ImageGalleryItem">
            <img
              src={photo.webformatURL}
              id={photo.id}
              alt={photo.tags}
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
        ;
      </ul>
    );
  }
}

export default ImageGallery;

// присваивать keyWord значение с инпута
// пагинация
// модалку активировать
//largeImageURL передавать модалке
