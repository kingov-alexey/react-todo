import React from 'react';
import styles from './Item.module.css';
import Button from '../Button/Button';

function Item(props) {
  //   Item.jsx - рендерит элемент списка
  // props:
  // id: string;
  // text: string;
  // date: string;
  // onDoneClick: funcion;
  // onDeleteClick: function;

  const onDoneClick = props.onDoneClick;

  return (
    <>
      <div className={styles.itemWrap}>
        {/* <div>{props.id}</div> */}
        <div className={styles.titleTask}>{props.text}</div>
        <div className={styles.blockRight}>
          <div className={styles.date}>{props.date}</div>
          <Button text='✔' className='buttonDone' onDoneClick={props.onDoneClick} />
          <Button text='❌' className='buttonDelete' />
        </div>
      </div>
    </>
  );
}

export default Item;
