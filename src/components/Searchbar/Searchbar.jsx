import React, { Component } from 'react';

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
    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
