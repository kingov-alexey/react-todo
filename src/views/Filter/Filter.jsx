import React from 'react';
import styles from './Filter.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { AppContext } from '../../App';

function Filter() {
  const {
    inputFilterValue,
    setInputFilterValue,
    onSortByNameClick,
    onSortByDateClick,
    onSortByStatusClick,
  } = React.useContext(AppContext);

  const handleClickClear = () =>{
    setInputFilterValue('');
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <div className={styles.iconSearch}></div>
          <Input
            placeholder='Filter'
            className='inputFilter'
            value={inputFilterValue}
            onChange={setInputFilterValue}
          />

          {inputFilterValue ? (
            <div className={styles.iconClear} onClick={handleClickClear}></div>
          ) : (
            ''
          )}
        </div>
        <div className={styles.buttonBlock}>
          <Button text='SortByName' className='buttonStock' onClick={onSortByNameClick} />
          <Button text='SortByDate' className='buttonStock' onClick={onSortByDateClick} />
          <Button text='SortByStatus' className='buttonStock' onClick={onSortByStatusClick} />
        </div>
      </div>
    </>
  );
}

export default Filter;
