import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import { Container } from './App.styled';
// https://pixabay.com/api/?q=cat&page=1&key=32923977-2b8c4baca426f7e2e03c5661d&image_type=photo&orientation=horizontal&per_page=12

class App extends Component {
  state = {
    images: [],
  };
  searchImage = inputText => {
    fetch(
      `https://pixabay.com/api/?q=${inputText}&page=1&key=32923977-2b8c4baca426f7e2e03c5661d&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(new Error(`fetch failed`));
      })
      .then(body =>
        this.setState({
          images: body.hits.map(el => {
            return {
              id: el.id,
              webformatURL: el.webformatURL,
              largeImageURL: el.largeImageURL,
            };
          }),
        })
      );
  };
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.searchImage} />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Modal />
        <Button />
      </Container>
    );
  }
}

export default App;
