import React from 'react';
import styles from './Filter.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function Filter() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <div className={styles.iconSearch}></div>
          <Input placeholder='Filter' className='inputFilter' />
        </div>
        <div className={styles.buttonBlock}>
          <Button text='SortByName' className='buttonStock' />
          <Button text='SortByDate' className='buttonStock' />
          <Button text='SortByStatus' className='buttonStock' />
        </div>
      </div>
    </>
  );
}

export default Filter;
