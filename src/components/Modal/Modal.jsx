import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <ModalStyled>
          <img src={this.props.image} alt="big mode" />
        </ModalStyled>
      </Overlay>
    );
  }
}
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
