import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a href='https://github.com/kingov-alexey/react-todo' target='_blank'>
          <div className={styles.github}>github</div>
        </a>
        <a href='https://web.telegram.org/k/#@kingov_alexey' target='_blank'>
          <div className={styles.telegram}>telegram</div>
        </a>
        <a href='https://www.linkedin.com/in/kingov-alexey/' target='_blank'>
          <div className={styles.linkedin}>linkedin</div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
