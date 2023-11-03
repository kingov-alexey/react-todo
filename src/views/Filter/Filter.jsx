import React from 'react';
import styles from './Filter.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { AppContext } from '../../App';

function Filter() {
  const { inputFilterValue,setInputFilterValue } = React.useContext(AppContext);
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <div className={styles.iconSearch}></div>
          <Input placeholder='Filter' className='inputFilter' value={inputFilterValue} onChange={setInputFilterValue}  />
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
