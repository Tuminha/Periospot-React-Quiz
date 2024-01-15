// src/components/Footer/Footer.jsx
import propTypes from 'prop-types';
import './Footer.css'; // Assuming you have a CSS file for styling


const Footer = ({ currentStep, totalSteps, onPrevStep, onNextStep }) => {
  const progress = (currentStep / totalSteps) * 100;

  if (currentStep === 0 || currentStep === -1) {
    return null;
  }

  return (
    <footer className="footer">
      <button className="step-button" onClick={onPrevStep}>Previous</button>
      <progress value={progress} max="100"></progress>
      <button className="step-button" onClick={onNextStep ? onNextStep : () => {}}>Next</button>
      <div className="progress-text">
        {currentStep} / {totalSteps}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  currentStep: propTypes.number.isRequired,
  totalSteps: propTypes.number.isRequired,
  showStartScreen: propTypes.bool.isRequired,
  onPrevStep: propTypes.func.isRequired,
  onNextStep: propTypes.func,
};

export default Footer;