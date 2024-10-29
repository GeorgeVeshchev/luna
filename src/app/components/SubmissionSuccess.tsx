
"use client";
import React from 'react';
import styles from '../styles/SubmissionSuccess.module.css';
import check from '../../../public/check.png'

interface SubmissionSuccessProps {
  onDone: () => void; 
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({ onDone }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={check.src} alt="Success Check" className={styles.logo} />
      </div>
      <p className={styles.message}>
        Response received
      </p>
      <p className={styles.secondaryMessage}>
        Thank you for your interest in Chad! We’ll be hard at 
        <br />
        work building integrations to support your platform.
      </p>
      <button className={styles.doneButton} onClick={onDone}>
        Done
      </button>
    </div>
  );
};

export default SubmissionSuccess;
