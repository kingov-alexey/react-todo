import React from "react";
import styles from "./Main.module.css";
import ItemList from "../../components/ItemList/ItemList";

function Main() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.itemList}>
          <ItemList />
        </div>
      </main>
    </>
  );
}

export default Main;
