
"use client";
import React, { useState } from 'react';
import styles from '../styles/ShopifyStoreForm.module.css';
import chad from '../../../public/chad.png';
import compl from '../../../public/compl.png';
import ConnectShopify from './ConnectShopify'; 
import NonShopifyForm from './NonShopifyForm';

interface ShopifyStoreFormProps {
  onSubmit: () => void; 
}

const ShopifyStoreForm: React.FC<ShopifyStoreFormProps> = ({ onSubmit }) => {
  const [showConnectShopify, setShowConnectShopify] = useState(false);
  const [showNonShopify, setShowNonShopify] = useState(false);

  const handleConnectStore = () => {
    setShowConnectShopify(true);
    setShowNonShopify(false);
  };

  const handleNonShopifyClick = () => {
    setShowNonShopify(true);
    setShowConnectShopify(false);
  };

  const handleContinue = () => {
    console.log("Continue to the next step");
    onSubmit(); 
  };

  if (showConnectShopify) {
    return <ConnectShopify onContinue={handleContinue} />;
  }

  if (showNonShopify) {
    return <NonShopifyForm onNextStep={handleContinue} />; 
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.logoContainer}>
        <img src={chad.src} alt="Chad Logo" className={styles.logo} />
        <h2 className={styles.title}>Chad</h2>
      </div>
      <p className={styles.paragraph}>Connect your Shopify store</p>
      <p className={styles.paragraphSecondary}>
        Installs the Chad widget in your Shopify store and sets it up 
        <br />
        to display your customers’ order information and self-serve 
        <br />
        options.
      </p>

      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <img src={compl.src} alt="Check Icon" className={styles.smallLogo} />
          <div className={styles.infoTextContainer}>
            <p className={styles.infoText}>Track orders and shipping</p>
            <p className={styles.infoTextSecondary}>Global coverage with 600+ couriers supported</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <img src={compl.src} alt="Check Icon" className={styles.smallLogo} />
          <div className={styles.infoTextContainer}>
            <p className={styles.infoText}>Manage orders</p>
            <p className={styles.infoTextSecondary}>Allow customers to track, return, exchange, or report problems with their orders</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <img src={compl.src} alt="Check Icon" className={styles.smallLogo} />
          <div className={styles.infoTextContainer}>
            <p className={styles.infoText}>Process returns and exchanges</p>
            <p className={styles.infoTextSecondary}>Automatically checks your store policy and existing inventory before resolving or escalating each request</p>
          </div>
        </div>
      </div>

      <button onClick={handleConnectStore} className={styles.button}>
        Connect store
      </button>
      
      <p className={styles.footerText}>
        <a href="#" className={styles.link} onClick={handleNonShopifyClick}>I don't use Shopify</a>
      </p>
    </div>
  );
};

export default ShopifyStoreForm;
