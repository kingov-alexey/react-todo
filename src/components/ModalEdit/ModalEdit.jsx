// Modal.js
import React from 'react';
import styles from './ModalEdit.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ModalEdit = (props, { isOpen, onClose, children, title }) => {
  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const test = () => {
    alert('Заглушка');
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.modal}>
            <div className={styles.closeButton} onClick={onClose}>
              ✖
            </div>

            <h2>{title}</h2>
            <div style={{ display: 'flex', minWidth: '300px', justifyContent: 'space-around' }}>
              <Input
                placeholder='Enter new value'
                className='inputEditValue'
                value={props.text}
                onChange={test}
              />
              <Button text='✔ Edit' className='buttonEdit' onClick={test} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalEdit;
