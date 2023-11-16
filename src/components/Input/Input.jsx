import React from 'react';
import styles from './Input.module.css';
import { AppContext } from '../../App';

function Input(props) {
  const { onAddClick } = React.useContext(AppContext);

  const [placeholder, setPlaceholder] = React.useState('');

  const initialPlaceholder = props.placeholder;

  React.useEffect(() => {
    const placeholderText = initialPlaceholder;
    let index = 0;

    const intervalId = setInterval(() => {
      if (props.placeholder === 'Filter') {
        setPlaceholder(placeholderText);
        clearInterval(intervalId);
      } else {
        setPlaceholder(prevPlaceholder => prevPlaceholder + placeholderText[index - 1]);
        index += 1;
      }

      if (index === placeholderText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [initialPlaceholder]);

  const className = styles[props.className];
  const value = props.value;
  const onChange = props.onChange;

  const handleChangeInput = e => {
    onChange(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && props.className != 'buttonADD') {
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
