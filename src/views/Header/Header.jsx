import React from "react";
import styles from "./Header.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftBlock}>
          <Button text="sortByName" className="buttonStock" />
          <Button text="sortByDate" className="buttonStock" />
        </div>
        <div className={styles.rightBlock}>
          <Input placeholder="Filter" className="inputFilter" />
        </div>
      </header>
    </>
  );
}

export default Header;
