import React from 'react';
import styles from '../styles/FeatureCard.module.css';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <Icon className={styles.icon} size={48} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;