import React, { Component } from 'react';
import { Overlay, ModalStyled } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.closeModal();
      }
    });
  }
  render() {
    return (
      <Overlay onClick={this.props.closeModal}>
        <ModalStyled class="modal">
          <img src={this.props.image} />
        </ModalStyled>
      </Overlay>
    );
  }
}
export default Modal;
