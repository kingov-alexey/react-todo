import React from 'react';
import styles from './Header.module.css';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { AppContext } from '../../App';
import logoImage from '../../assets/images/logoImage.png';
import ModalInfo from '../../components/ModalInfo/ModalInfo';

function Header() {
  const {
    onAddClick,
    inputTaskAddValue,
    setInputTaskAddValue,
    modalInfoIsOpen,
    closeModalInfo,
    closeModalAboutApp,
    modalAboutAppIsOpen,
    openModalAboutApp,
  } = React.useContext(AppContext);

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
        <ModalInfo isOpen={modalInfoIsOpen} onClose={closeModalInfo} title='Info'>
          <h2>
            The input field is empty or has spaces,
            <br />
            you need to add content!
          </h2>
        </ModalInfo>

        <ModalInfo isOpen={modalAboutAppIsOpen} onClose={closeModalAboutApp} title='Info'>
          <h2>About App </h2>
          <ul>
            <li>React</li>
            <li>useState</li>
            <li>useEffect</li>
            <li>useContext</li>
            <li>useRef</li>
          </ul>
        </ModalInfo>
        <div
          className={styles.logo}
          onClick={() => {
            openModalAboutApp(true);
          }}
        >
          <img src={logoImage} className={styles.logoIMG} alt='logoIMG' />
          <div className={styles.wrapTextLogo}>
            <h1 className={styles.title}>REACT-TODO</h1>
            <hr />
            <div className={styles.description}>
              JUST DO IT! <span>VER: 1</span>
            </div>
          </div>
        </div>

        <div className={styles.inputBlock}>
          <Input
            placeholder='What do you want to do?'
            className='inputTaskAdd'
            value={inputTaskAddValue}
            onChange={setInputTaskAddValue}
          />
        </div>

        <div className={styles.buttonAdd}>
          <Button text='ADD TASK' className='buttonADD' onClick={addClick} />
        </div>
      </header>
    </>
  );
}

export default Header;
