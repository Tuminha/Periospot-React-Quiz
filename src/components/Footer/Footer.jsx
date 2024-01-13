// src/components/Footer/Footer.jsx
import propTypes from 'prop-types';
import './Footer.css'; // Assuming you have a CSS file for styling


const Footer = ({ currentStep, totalSteps, showStartScreen }) => {
  const progress = (currentStep / totalSteps) * 100;

  if (currentStep === 0 || currentStep === -1) {
    return null;
  }

  return (
    <footer className="footer">
      <progress value={progress} max="100"></progress>
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
};

export default Footer;