import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';

const ImageGallery = () => {
  return (
 
      <ul className="ImageGallery">
      {/* <!-- Набор <li> с изображениями --> */}
      <ImageGalleryItem/>
      </ul>
  
  )
};

export default ImageGallery;
