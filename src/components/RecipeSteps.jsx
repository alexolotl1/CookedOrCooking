import React from 'react';
import { recordStepCompleted } from '../data/userStats';

export default function RecipeSteps({ recipe, onClose }) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const step = recipe.steps[currentStep];
  const totalSteps = recipe.steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      recordStepCompleted();
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    recordStepCompleted();
    alert(`Congratulations! You've completed ${recipe.name}! 🎉`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content recipe-steps-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="steps-header">
          <h2>{recipe.name}</h2>
          <p className="step-counter">Step {currentStep + 1} of {totalSteps}</p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="step-content">
          <h3 className="step-title">{step.number}. {step.title}</h3>
          <div className="step-details">
            <p>{step.details}</p>
          </div>

          <div className="step-visual">
            {step.image}
          </div>
        </div>

        <div className="steps-buttons">
          <button 
            className="btn-secondary" 
            onClick={handlePrev}
            disabled={currentStep === 0}
          >
            ← Previous
          </button>
          
          <button 
            className="btn-step-counter"
          >
            {currentStep + 1} / {totalSteps}
          </button>

          {currentStep === totalSteps - 1 ? (
            <button 
              className="btn-primary" 
              onClick={handleFinish}
            >
              Finish! ✓
            </button>
          ) : (
            <button 
              className="btn-primary" 
              onClick={handleNext}
            >
              Next Step →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

