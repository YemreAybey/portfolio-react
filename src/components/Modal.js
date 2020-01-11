import React from 'react';

const Modal = ({ stacks }) => {
  return (
    <div className="modal">
      <div className="modal__header">USED STACKS</div>
      <div className="modal__content">{stacks}</div>
    </div>
  );
};

export default Modal;
