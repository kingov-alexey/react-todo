import React from 'react';
import Item from '../Item/Item';
import styles from './ItemLIst.module.css';

function ItemList({ onDoneClick, onEditClick, onDeleteClick, itemList }) {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>#</div>
          <div className={styles.headerCell}>TASK NAME</div>
          <div className={styles.headerCell}>DATE - TIME CREATE</div>
          <div className={styles.headerCell}>STATUS</div>
          <div className={styles.headerCell}>EDIT</div>
          <div className={styles.headerCell}>REMOVE</div>
        </div>

        <div className={styles.tableBody}>
          {itemList.map(el => {
            return (
              <Item
                key={el.id}
                id={el.id}
                text={el.titleTask}
                onDoneClick={onDoneClick}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                date={el.date}
                status={el.status}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ItemList;
