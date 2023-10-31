import React from "react";
import styles from "./Main.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ItemList from "../../components/ItemList/ItemList";
import { AppContext } from "../../App";

function Main() {
  const { onAddClick } = React.useContext(AppContext);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.h1}>ToDO List</h1>
        </div>
        <div className={styles.taskAdd}>
          <Input
            placeholder="What do you want to do?"
            className="inputTaskAdd"
          />
          <Button text="ADD" className="buttonBig" onClick={onAddClick} />
        </div>
        <div className={styles.itemList}>
          <ItemList />
        </div>
      </main>
    </>
  );
}

export default Main;
