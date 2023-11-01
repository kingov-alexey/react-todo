import React from "react";
import styles from "./Fillter.module.css";
import Input from "../../components/Input/Input";

function Fillter() {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.iconSearch}></div>
        <Input placeholder="Fillter" className="inputFilter" />
      </div>
    </>
  );
}

export default Fillter;
