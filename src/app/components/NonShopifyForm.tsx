// src/app/components/NonShopifyForm.tsx
"use client";
import React, { useState } from 'react';
import styles from '../styles/NonShopifyForm.module.css';
import chad from '../../../public/chad.png';
import SubmissionSuccess from './SubmissionSuccess';
import CustomerSupportForm from './CustomerSupportForm';

interface NonShopifyFormProps {
  onNextStep: () => void; 
}

const NonShopifyForm: React.FC<NonShopifyFormProps> = ({ onNextStep }) => {
  const [platform, setPlatform] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showSupportForm, setShowSupportForm] = useState<boolean>(false);

  const handlePlatformChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(event.target.value);
  };

  const handleSubmit = () => {
    if (platform) {
      setIsSubmitted(true); 
    }
  };

  const handleDone = () => {
    setShowSupportForm(true);
  };


  if (isSubmitted && !showSupportForm) {
    return <SubmissionSuccess onDone={onNextStep} />;
  }

 
  if (showSupportForm) {
    return <CustomerSupportForm onNext={onNextStep} />; 
  }

 
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={chad.src} alt="Logo" className={styles.logo} />
        <span className={styles.chadText}>Chad</span>
      </div>
      <p className={styles.paragraph}>Don’t use Shopify?</p>
      <p className={styles.paragraphSecondary}>
        Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform.
      </p>
      
      <p className={styles.platformLabel}>Platform</p>
      <select className={styles.platformSelect} value={platform} onChange={handlePlatformChange}>
        <option value="">Select platform</option>
        <option value="platform1">Platform 1</option>
        <option value="platform2">Platform 2</option>
        <option value="platform3">Platform 3</option>
      </select>

      <button className={styles.button} onClick={handleSubmit}>
        Submit
      </button>

      <p className={styles.linkParagraph}>
        Actually use Shopify? <a href="#" className={styles.link}>Connect</a>.
      </p>
    </div>
  );
};

export default NonShopifyForm;
