import React, { Component } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    imageName: '',
  };
  componentDidMount() {}

  handleNameChange = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.imageName);
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
export default Searchbar;
