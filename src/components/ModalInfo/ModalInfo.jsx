// Modal.js
import React from 'react';
import styles from './ModalInfo.module.css';

const ModalInfo = ({ isOpen, onClose, children }) => {
  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.modal}>
            <div className={styles.closeButton} onClick={onClose}>
              ✖ Close
            </div>
            <div className={styles.iconInfo}></div>
            {children}
            <div className={styles.bottomMargin}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalInfo;
