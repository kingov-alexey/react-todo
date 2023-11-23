import React from 'react';
import styles from './Item.module.css';
import Button from '../Button/Button';
import { AppContext } from '../../App';

function Item(props) {
  const {  } = React.useContext(AppContext);

  const onDoneClick = props.onDoneClick;
  const onDeleteClick = props.onDeleteClick;

  const handleDoneClick = () => {
    const newStatus = props.status === 'done' ? 'new' : 'done';
    const newItem = {
      id: props.id,
      titleTask: props.text,
      date: props.date,
      status: newStatus,
    };
    onDoneClick(props.id, newItem);
  };

  const handleDeleteClick = () => {
    onDeleteClick(props.id);
  };

  const handleEditClick = () => {
    alert(`Edit element ID: ${props.id}`);
  };

  return (
    <>
      <div
        className={`${styles.tableRow} ${props.status === 'done' ? styles.greenBackground : ''}`}
      >
        <div className={styles.tableCell}>{props.id}</div>
        <div className={styles.tableCell}>{props.text}</div>
        <div className={styles.tableCell}>{props.date}</div>
        <div className={styles.tableCell}>
          {props.status === 'done' ? (
            <Button text='✔ Done' className='buttonDone' onClick={handleDoneClick} />
          ) : (
            <Button text='New' className='buttonDone' onClick={handleDoneClick} />
          )}
        </div>
        <div className={styles.tableCell}>
          <Button text='🖋 Edit' className='buttonEdit' onClick={handleEditClick} />
        </div>
        <div className={styles.tableCell}>
          <Button text='✖ Delete' className='buttonDelete' onClick={handleDeleteClick} />
        </div>
      </div>
    </>
  );
}

export default Item;
