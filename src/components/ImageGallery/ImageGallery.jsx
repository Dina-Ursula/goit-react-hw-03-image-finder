import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

const ImageGallery = ({ images, showModal }) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => (
        <ImageGalleryItem image={image} showModal={showModal} />
      ))}
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
