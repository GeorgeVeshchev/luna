
"use client";
import React, { useState } from 'react';
import styles from '../styles/CustomerSupportForm.module.css';
import chad from '../../../public/chad.png';
import compl from '../../../public/compl.png';
import google from '../../../public/google.png';
import Welcome from './Welcome';
import NonGmailForm from './NonGmailForm';

interface CustomerSupportFormProps {
  onNext: () => void;
}

const CustomerSupportForm: React.FC<CustomerSupportFormProps> = ({ onNext }) => {
  const [currentStep, setCurrentStep] = useState<'form' | 'welcome' | 'nonGmail'>('form');

  const handleConnectGmail = () => {
    setCurrentStep('welcome');
    onNext();
  };

  const handleNoGmail = () => {
    setCurrentStep('nonGmail');
  };

  switch (currentStep) {
    case 'welcome':
      return <Welcome />;
    case 'nonGmail':
      return <NonGmailForm onNextStep={onNext} />; 
    default:
      return (
        <div className={styles.formContainer}>
          <div className={styles.logoContainer}>
            <img src={chad.src} alt="Chad Logo" className={styles.logo} />
            <h2 className={styles.title}>Chad</h2>
          </div>

          <p className={styles.paragraph}>Connect your customer support email</p>
          <p className={styles.paragraphSecondary}>
            Allows Chad to send automated responses on your behalf
            <br />
            from your usual support mailbox
          </p>

          <div className={styles.infoContainer}>
            <div className={styles.infoItem}>
              <img src={compl.src} alt="Check Icon" className={styles.smallLogo} />
              <div className={styles.infoTextContainer}>
                <p className={styles.infoText}>Contextual responses</p>
                <p className={styles.infoTextSecondary}>Custom responses to any support situation from “where’s my stuff?” to “I want a refund”</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <img src={compl.src} alt="Check Icon" className={styles.smallLogo} />
              <div className={styles.infoTextContainer}>
                <p className={styles.infoText}>Reply from anywhere</p>
                <p className={styles.infoTextSecondary}>Respond to your customers via email or Chad chat—it’s all saved in the same thread</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <img src={compl.src} alt="Check Icon" className={styles.smallLogo} />
              <div className={styles.infoTextContainer}>
                <p className={styles.infoText}>Categorical inbox tags</p>
                <p className={styles.infoTextSecondary}>Tags your emails by category so you know what to expect before even opening an email</p>
              </div>
            </div>
          </div>

          <button className={styles.button} onClick={handleConnectGmail}>
            <img src={google.src} alt="Gmail Logo" className={styles.gmailLogo} />
            <span>Connect Gmail account</span>
          </button>

          <p className={styles.footerText}>
            <a href="#" className={styles.link} onClick={handleNoGmail}>I don’t use Gmail</a>
          </p>
        </div>
      );
  }
};

export default CustomerSupportForm;
