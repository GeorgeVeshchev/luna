
"use client";
import React from 'react';
import styles from '../styles/StoreConnected.module.css';
import shopify from '../../../public/shopify.png';

const StoreConnected: React.FC<{ storeName: string; onBack: () => void }> = ({ storeName, onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={shopify.src} alt="Shopify Logo" className={styles.logo} />
      </div>
      <p className={styles.paragraph}>
        {storeName} already connected
      </p>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
    </div>
  );
};

export default StoreConnected;
