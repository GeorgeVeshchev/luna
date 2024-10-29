
"use client";
import React, { useState } from 'react';
import Stepper from './components/StepperContainer';
import RegisterForm from './components/RegisterForm';
import ShopifyStoreForm from './components/ShopifyStoreForm';
import CustomerSupportForm from './components/CustomerSupportForm';
import Welcome from './components/Welcome';
import styles from './styles/PageLayout.module.css';

const RegisterPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<{ email: string; name: string; password: string } | null>(null);

 
  const handleNextStep = (data?: { email: string; name: string; password: string }) => {
    if (data) {
      setUserData(data);
    }
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3)); 
  };

  
  const handleBackStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <RegisterForm onSubmit={handleNextStep} />;
      case 1:
        return <ShopifyStoreForm onSubmit={() => handleNextStep(userData!)} />;
      case 2:
        return <CustomerSupportForm onNext={() => handleNextStep()} />;
      case 3:
        return <Welcome name={userData?.name || "User"} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <Stepper currentStep={currentStep} onBack={handleBackStep} onNext={() => handleNextStep()} />
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${(currentStep / 3) * 100}%` }} />
        </div>

       
        <div className={`${styles.stepText} ${styles.mobileStepText}`}>
          Step {currentStep + 1} of 4
        </div>

        <div className={styles.scrollContainer}> 
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
