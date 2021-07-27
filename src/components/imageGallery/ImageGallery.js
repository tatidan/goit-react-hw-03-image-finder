import React from "react";

const ImageGallery = ({ photos, addLargeImg }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL}
            id={id}
            alt={tags}
            onClick={() => {
              addLargeImg(largeImageURL);
            }}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
