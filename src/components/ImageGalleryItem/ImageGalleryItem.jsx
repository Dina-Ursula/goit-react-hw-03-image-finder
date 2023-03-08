import React from 'react';

const ImageGalleryItem = ({ image }) => {
  return (
    <li class="gallery-item" key={image.id}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
