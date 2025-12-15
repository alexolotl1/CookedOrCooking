import { useState } from 'react';

export default function RecipeStepsForm({ formData, creationSteps, onStepsChange, onBack, onNext, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepTitle, setStepTitle] = useState(creationSteps[currentStep]?.title || '');
  const [stepDetails, setStepDetails] = useState(creationSteps[currentStep]?.details || '');

  const handleNextStep = () => {
    // Save current step
    if (stepTitle || stepDetails) {
      const updatedSteps = [...creationSteps];
      updatedSteps[currentStep] = {
        number: currentStep + 1,
        title: stepTitle,
        details: stepDetails
      };
      onStepsChange(updatedSteps);

      // If next step doesn't exist, create it
      if (currentStep + 1 >= updatedSteps.length) {
        const newStep = {
          number: updatedSteps.length + 1,
          title: '',
          details: ''
        };
        updatedSteps.push(newStep);
        onStepsChange(updatedSteps);
      }

      // Move to next step
      setCurrentStep(currentStep + 1);
      setStepTitle(updatedSteps[currentStep + 1]?.title || '');
      setStepDetails(updatedSteps[currentStep + 1]?.details || '');
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      // Save current step
      const updatedSteps = [...creationSteps];
      updatedSteps[currentStep] = {
        number: currentStep + 1,
        title: stepTitle,
        details: stepDetails
      };
      onStepsChange(updatedSteps);

      // Move to previous step
      setCurrentStep(currentStep - 1);
      setStepTitle(updatedSteps[currentStep - 1]?.title || '');
      setStepDetails(updatedSteps[currentStep - 1]?.details || '');
    }
  };

  const handleFinish = () => {
    // Save current step
    const updatedSteps = [...creationSteps];
    updatedSteps[currentStep] = {
      number: currentStep + 1,
      title: stepTitle,
      details: stepDetails
    };
    // Filter out empty steps
    const filledSteps = updatedSteps.filter(step => step.title && step.details);
    onStepsChange(filledSteps);
    onNext();
  };

  const handleBackToInfo = () => {
    // Save current step
    const updatedSteps = [...creationSteps];
    updatedSteps[currentStep] = {
      number: currentStep + 1,
      title: stepTitle,
      details: stepDetails
    };
    onStepsChange(updatedSteps);
    onBack();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="recipe-steps-form">
          <div className="form-header">
            <h2>Add Cooking Steps</h2>
            <div className="form-step-indicator">Step 2 of 3: Building your recipe</div>
          </div>

          <div className="steps-builder">
            <div className="step-builder-header">
              <p className="step-builder-number">{currentStep + 1}</p>
              <p className="step-builder-label">Step {currentStep + 1}</p>
            </div>

            <div className="step-input-group">
              <label className="form-label">Step Title</label>
              <input
                type="text"
                className="form-input"
                value={stepTitle}
                onChange={(e) => setStepTitle(e.target.value)}
                placeholder="e.g., Cook the pasta"
              />
            </div>

            <div className="step-input-group">
              <label className="form-label">Step Description</label>
              <textarea
                className="form-textarea"
                value={stepDetails}
                onChange={(e) => setStepDetails(e.target.value)}
                placeholder="Describe this step in detail..."
                style={{ minHeight: '100px' }}
              />
            </div>
          </div>

          {creationSteps.length > 0 && (
            <div className="steps-preview">
              <h3 style={{ margin: '0 0 1rem 0', color: '#1e8449' }}>Steps Added ({creationSteps.filter(s => s.title).length})</h3>
              <ul className="steps-list">
                {creationSteps.map((step, index) => (
                  step.title && (
                    <li key={index} className="steps-list-item">
                      <div className="steps-list-number">{step.number}</div>
                      <div className="steps-list-content">
                        <p className="steps-list-title">{step.title}</p>
                        <p className="steps-list-desc">{step.details}</p>
                      </div>
                    </li>
                  )
                ))}
              </ul>
            </div>
          )}

          <div className="form-buttons space-between">
            <div>
              <button className="btn-form secondary" onClick={handleBackToInfo}>
                ← Back to Info
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="btn-form secondary"
                onClick={handlePreviousStep}
                disabled={currentStep === 0}
              >
                ← Previous
              </button>

              <button className="btn-form blue" onClick={handleNextStep}>
                Next Step →
              </button>

              {creationSteps.filter(s => s.title && s.details).length > 0 && (
                <button className="btn-form primary" onClick={handleFinish}>
                  Review →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
