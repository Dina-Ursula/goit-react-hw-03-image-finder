import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <ul class="gallery">
      {images.map(image => (
        <ImageGalleryItem image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
