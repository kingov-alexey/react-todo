import React from 'react';
import styles from './Main.module.css';
import ItemList from '../../components/ItemList/ItemList';

function Main({ onDoneClick, onEditClick, onDeleteClick, itemList }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.itemList}>
          <ItemList
            onDoneClick={onDoneClick}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
            itemList={itemList}
          />
        </div>
      </main>
    </>
  );
}

export default Main;
