// Modal.js
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children, title }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.modal}>
            <div className={styles.closeButton} onClick={onClose}>✖</div>

            <h2>{title}</h2>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
