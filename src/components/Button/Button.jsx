import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  // Button.jsx - рендерит разные кнопки
  // props:
  // className: string;
  // text: string;
  // onClick: function;

  const dynamicClassName = styles[props.className];

  const onClickButton = () => {
    alert(props.text);
  };
  return (
    <>
      <div className={dynamicClassName} onClick={onClickButton}>
        {props.text}
      </div>
    </>
  );
}

export default Button;
