
"use client";
import React, { useState } from 'react';
import styles from '../styles/NonGmailForm.module.css';
import chad from '../../../public/chad.png';
import SubmissionSuccess from './SubmissionSuccess';

interface NonGmailFormProps {
  onNextStep: () => void; 
}

const NonGmailForm: React.FC<NonGmailFormProps> = ({ onNextStep }) => {
  const [platform, setPlatform] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handlePlatformChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlatform(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleDone = () => {
    onNextStep(); 
  };

  if (isSubmitted) {
    return <SubmissionSuccess onDone={handleDone} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={chad.src} alt="Logo" className={styles.logo} />
        <span className={styles.chadText}>Chad</span>
      </div>
      <p className={styles.paragraph}>Don’t use Gmail?</p>
      <p className={styles.paragraphSecondary}>
        Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform.
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
        Actually use Gmail? <a href="#" className={styles.link}>Connect</a>
      </p>
    </div>
  );
};

export default NonGmailForm;
