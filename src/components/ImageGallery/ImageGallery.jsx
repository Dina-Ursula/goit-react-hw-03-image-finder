import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled class="gallery">
      {images.map(image => (
        <ImageGalleryItem image={image} />
      ))}
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
