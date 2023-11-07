import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const dynamicClassName = styles[props.className];
  const onClick = props.onClick;

  const handleOnClick = () => {
    onClick();
  };
  return (
    <>
      <div className={dynamicClassName} onClick={handleOnClick}>
        {props.text}
        {props.className === "buttonADD" && (
          <div className={styles.buttonADDIcon}></div>
        )}
      </div>
    </>
  );
}

export default Button;
