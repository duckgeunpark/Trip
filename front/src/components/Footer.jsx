import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 TravelLogAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;