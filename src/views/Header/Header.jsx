import React from "react";
import styles from "./Header.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../App";

function Header(props) {
  const { onSortByNameClick, onSortByDateClick } = React.useContext(AppContext);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftBlock}>
          <Button
            text="sortByName"
            className="buttonStock"
            onClick={onSortByNameClick}
          />
          <Button
            text="sortByDate"
            className="buttonStock"
            onClick={onSortByDateClick}
          />
        </div>
        <div className={styles.rightBlock}>
          <Input placeholder="Filter" className="inputFilter" />
        </div>
      </header>
    </>
  );
}

export default Header;
