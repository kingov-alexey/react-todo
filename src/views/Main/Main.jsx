import React from 'react';
import styles from './Main.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ItemList from '../../components/ItemList/ItemList';

const Main = props => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.h1}>ToDO List</h1>
        </div>
        <div className={styles.taskAdd}>
          <Input placeholder='What do you want to do?' className='inputTaskAdd' />
          <Button text='ADD' className='buttonBig' />
        </div>
        <div className={styles.itemList}>
          <ItemList onDoneClick={props.onDoneClick} />
        </div>
      </main>
    </>
  );
};

export default Main;
