import React from 'react';
import styles from './Header.module.css';

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        header
        <div className='settings'></div>
      </header>
    </>
  );
}

export default Header;
