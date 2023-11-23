import React from 'react';
import styles from './Main.module.css';
import ItemList from '../../components/ItemList/ItemList';

function Main({ onDoneClick, onEditClick, onDeleteClick, itemList }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.itemList}>
        {itemList.length > 0 ? (
            <ItemList
              onDoneClick={onDoneClick}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
              itemList={itemList}
            />
          ) : (
            <div className={styles.noData}>
              <span> <strong>No data</strong></span>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Main;
