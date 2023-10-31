import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  // Input.jsx - рендерит разные инпуты
  // props:
  // className: string;
  // placeholder: string;
  // value: string;
  // onChange: function;

  const dynamicClassName = styles[props.className];
  const onChangeInput = () => {
    console.log("onChangeInput");
  };

  return (
    <>
      <input
        className={dynamicClassName}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChangeInput}
      />
    </>
  );
}

export default Input;
