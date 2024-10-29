
"use client";
import React from 'react';
import styles from '../styles/ConnectShopify.module.css'; 
import shopify from '../../../public/shopify.png';

const ConnectShopify: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={shopify.src} alt="Shopify Logo" className={styles.logo} />
      </div>
      <p className={styles.paragraph}>
        Store connected
      </p>
      <p className={styles.paragraphSecondary}>
        Chad is now able to manage customer support requests for [STORE-NAME].
      </p>
      <button className={styles.continueButton} onClick={onContinue}>
        Continue
      </button>
      <p className={styles.linkParagraph}>
        Wrong store? <a href="/more-info" className={styles.link}>Connect another one</a>.
      </p>
    </div>
  );
};

export default ConnectShopify;
