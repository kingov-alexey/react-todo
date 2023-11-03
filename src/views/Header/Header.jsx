import React from 'react';
import styles from './Header.module.css';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { AppContext } from '../../App';
import logoImage from '../../assets/images/logoImage.png';

function Header() {
  const { onAddClick,inputTaskAddValue, setInputTaskAddValue} = React.useContext(AppContext);

  const value = {
    id: '555',
    titleTask: 'clean the house',
    date: '1990.18.05',
  };
  const addClick = () => {
    onAddClick(value);
  };
  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.logo}
          onClick={() => {
            alert('Dark theme toggle');
          }}
        >
          <img src={logoImage} className={styles.logoIMG} alt='logoIMG' />
          <div className={styles.wrapTextLogo}>
            <h1 className={styles.title}>REACT-TODO</h1>
            <hr />
            <div className={styles.description}>JUST DO IT! NOW!</div>
          </div>

        </div>

        <div className={styles.inputBlock}>
          <Input placeholder='What do you want to do?' className='inputTaskAdd' value={inputTaskAddValue} onChange={setInputTaskAddValue} />
        </div>

        <div className={styles.buttonAdd}>
          <Button text='ADD TASK' className='buttonADD' onClick={addClick} />
        </div>

      </header>
    </>
  );
}

export default Header;
