import React from 'react';
import {
  ImageGalleryItemStyled,
  GalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  return (
    <ImageGalleryItemStyled class="gallery-item" key={image.id}>
      <GalleryItemImage src={image.webformatURL} alt="" />
    </ImageGalleryItemStyled>
  );
};

export default ImageGalleryItem;
