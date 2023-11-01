import React from "react";
import styles from "./Item.module.css";
import Button from "../Button/Button";
import { AppContext } from "../../App";

function Item(props) {
  // Item.jsx - рендерит элемент списка
  // props:
  // id: string;
  // text: string;
  // date: string;
  // onDoneClick: funcion;
  // onDeleteClick: function;

  // 3. Элемент списка должен содержать
  // текст, дату (рандомную), кнопку выполнения и кнопку удаления;

  const { onDoneClick, onEditClick, onDeleteClick } =
    React.useContext(AppContext);

  return (
    <>
      <div className={styles.tableRow}>
        <div className={styles.tableCell}>{props.id}</div>
        <div className={styles.tableCell}>{props.text}</div>
        <div className={styles.tableCell}>{props.date}</div>
        <div className={styles.tableCell}>
          <Button text="✔ Done" className="buttonDone" onClick={onDoneClick} />
        </div>
        <div className={styles.tableCell}>
          <Button text="🖋 Edit" className="buttonDone" onClick={onDoneClick} />
        </div>
        <div className={styles.tableCell}>
          <Button
            text="❌ Delete"
            className="buttonDelete"
            onClick={onDeleteClick}
          />
        </div>
      </div>
    </>
  );
}

export default Item;
