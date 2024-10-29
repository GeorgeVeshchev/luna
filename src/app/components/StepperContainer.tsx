
import React from 'react';
import styles from '../styles/StepperContainer.module.css';
import Vector from '../../../public/Vector.png';
import next from '../../../public/next.png';
import back from '../../../public/back.png';
import text from '../../../public/text.png'; 

const Stepper: React.FC<{
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
}> = ({ currentStep, onBack, onNext }) => {
  const steps = ["Welcome", "Connect your Shopify store", "Connect your customer support email", "Done"];

  return (
    <div className={styles.stepper}>
      {/* Шаги */}
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={`${styles.circle} ${currentStep === index ? styles.active : currentStep > index ? styles.completed : ''}`}>
            {currentStep > index ? (
              <span>✓</span> 
            ) : null
            }
          </div>
          <div className={styles.stepLabel}>{step}</div>
          {index < steps.length - 1 && <div className={styles.line}></div>} 
        </div>
      ))}

  
      <div className={styles.buttonContainer}>
        <button onClick={onBack} className={styles.button}>
          <img src={back.src} alt="Left Arrow" className={styles.arrowIcon} style={{ marginRight: '4px' }} />
          Back
        </button>
        <button onClick={onNext} className={styles.button} style={{ marginLeft: '0px' }}> 
          Next
          <img src={next.src} alt="Right Arrow" className={styles.arrowIcon} style={{ marginLeft: '4px' }} />
        </button>
      </div>

     
      <div className={styles.labelContainer}>
        <div className={styles.logoContainer}>
          <img src={text.src} alt="Logo" className={styles.logo} /> 
        </div>
        <p className={styles.labelText}>
          Acquiring a new customer is 5x more 
          <br />
          costly than making an unhappy customer 
          <br />
          happy
        </p>
      </div>

      
      <div className={styles.indicatorContainer}>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicatorCircle} ${currentStep === index ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
