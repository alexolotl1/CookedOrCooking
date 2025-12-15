import '../AdditionalApp.css';

export default function RecipePreview({ formData, creationSteps, onBack, onPublish, onClose }) {
  const handlePublish = () => {
    onPublish();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <div className="recipe-preview">
          <div className="preview-header">
            <h2>Review Your Recipe</h2>
            <p style={{ color: '#999', margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Step 3 of 3: Double-check everything</p>
          </div>

          <div className="preview-content">
            {formData.imageUrl && (
              <div className="preview-section" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <p className="preview-label">📸 Recipe Image</p>
                <img 
                  src={formData.imageUrl} 
                  alt={formData.name}
                  style={{ 
                    maxWidth: '300px', 
                    maxHeight: '250px', 
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginTop: '0.5rem'
                  }} 
                />
              </div>
            )}
            <div className="preview-section">
              <h3>📋 Recipe Information</h3>
              
              <div className="preview-info">
                <div className="preview-item">
                  <p className="preview-label">Recipe Name</p>
                  <p className="preview-value">{formData.name}</p>
                </div>
                <div className="preview-item">
                  <p className="preview-label">Cooking Time</p>
                  <p className="preview-value">{formData.time} mins</p>
                </div>
              </div>

              <div className="preview-info">
                <div className="preview-item">
                  <p className="preview-label">Servings</p>
                  <p className="preview-value">{formData.servings || 'Not specified'}</p>
                </div>
                <div className="preview-item">
                  <p className="preview-label">Difficulty</p>
                  <p className="preview-value">{formData.difficulty || 'Not specified'}</p>
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <p className="preview-label">Description</p>
                <p className="preview-description">{formData.description}</p>
              </div>

              {formData.details && (
                <div style={{ marginTop: '1rem' }}>
                  <p className="preview-label">Recipe Details</p>
                  <p className="preview-description">{formData.details}</p>
                </div>
              )}
            </div>

            {formData.ingredientsText && (
              <div className="preview-section">
                <h3>🥘 Ingredients</h3>
                <ul className="preview-steps-list">
                  {formData.ingredientsText.split(',').map((ingredient, index) => (
                    <li key={index} className="preview-steps-item">
                      <div className="preview-steps-number" style={{ backgroundColor: '#2ecc71' }}>✓</div>
                      <div className="preview-steps-content">
                        <p className="preview-steps-desc">{ingredient.trim()}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {creationSteps.length > 0 && (
              <div className="preview-section">
                <h3>👨‍🍳 Cooking Steps</h3>
                <ul className="preview-steps-list">
                  {creationSteps.map((step, index) => (
                    <li key={index} className="preview-steps-item">
                      <div className="preview-steps-number">{step.number}</div>
                      <div className="preview-steps-content">
                        <p className="preview-steps-title">{step.title}</p>
                        <p className="preview-steps-desc">{step.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="form-buttons">
            <button className="btn-form secondary" onClick={onBack}>
              ← Continue Editing
            </button>
            <button className="btn-form success" onClick={handlePublish}>
              ✓ Publish Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
