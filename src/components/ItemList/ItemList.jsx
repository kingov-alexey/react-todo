import React from "react";
import Item from "../Item/Item";
import { AppContext } from "../../App";
import styles from "./ItemLIst.module.css";

function ItemList() {
  const { itemList } = React.useContext(AppContext);

  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>#</div>
          <div className={styles.headerCell}>TASK NAME</div>
          <div className={styles.headerCell}>DATE CREATE</div>
          <div className={styles.headerCell}>STATUS</div>
          <div className={styles.headerCell}>EDIT</div>
          <div className={styles.headerCell}>REMOVE</div>
        </div>

        <div className={styles.tableBody}>
          {itemList.map((el) => {
            return (
              <Item key={el.id} id={el.id} text={el.titleTask} date={el.date} status={el.status}/>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ItemList;
