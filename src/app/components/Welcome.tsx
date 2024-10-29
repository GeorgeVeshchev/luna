
"use client";
import React from 'react';
import styles from '../styles/Welcome.module.css'; 

const Welcome: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Welcome to Chad!</h2>
      <p className={styles.paragraph}>Hello Luna Edge, My name is Georgiy</p>
    </div>
  );
};

export default Welcome;
