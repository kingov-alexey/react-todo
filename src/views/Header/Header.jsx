import React from "react";
import styles from "./Header.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { AppContext } from "../../App";
import logoImage from "../../assets/images/logoImage.png";
import Modal from "../../components/Modal/Modal";

function Header() {
  const { onAddClick, inputTaskAddValue, setInputTaskAddValue, closeModalAlert, modalAlertIsOpen,inputRef } =
    React.useContext(AppContext);

  const value = {
    id: "555",
    titleTask: "clean the house",
    date: "1990.18.05",
  };
  const addClick = () => {
    onAddClick(value);
  };
  return (
    <>
      <header className={styles.header}>
      <Modal 
        isOpen={modalAlertIsOpen} 
        onClose={closeModalAlert} 
        title='Поле ввода пустое или с пробелами, необходимо добавить содержимое!'/>
        <div
          className={styles.logo}
          onClick={() => {
            alert("Dark theme toggle");
          }}
        >
          <img src={logoImage} className={styles.logoIMG} alt="logoIMG" />
          <div className={styles.wrapTextLogo}>
            <h1 className={styles.title}>REACT-TODO</h1>
            <hr />
            <div className={styles.description}>JUST DO IT! NOW!</div>
          </div>
        </div>

        <div className={styles.inputBlock}>
          <Input
            placeholder="What do you want to do?"
            className="inputTaskAdd"
            value={inputTaskAddValue}
            onChange={setInputTaskAddValue}
          />
        </div>

        <div className={styles.buttonAdd}>
          <Button text="ADD TASK" className="buttonADD" onClick={addClick} />
        </div>
      </header>
    </>
  );
}

export default Header;
