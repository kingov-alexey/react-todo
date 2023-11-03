import React from "react";
import styles from "./Input.module.css";
import { AppContext } from "../../App";

function Input(props) {
  const { onAddClick } = React.useContext(AppContext);

  const className = styles[props.className];
  const placeholder = props.placeholder;
  const value = props.value;
  const onChange = props.onChange;

  const handleChangeInput = (e) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && props.className != 'buttonADD') {
      onAddClick();
    }
  };

  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default Input;
