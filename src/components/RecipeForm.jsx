import '../AdditionalApp.css';
import { useState } from 'react';

export default function RecipeForm({ formData, onFormChange, onNext, onClose }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageInputMethod, setImageInputMethod] = useState('url');

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ ...formData, [name]: value });
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    onFormChange({ ...formData, imageUrl: url });
    setImagePreview(url);
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result;
        onFormChange({ ...formData, imageUrl: base64String });
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const isComplete = formData.name && formData.description && formData.time;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <div className="recipe-form">
          <div className="form-header">
            <h2>Submit Your Recipe</h2>
            <div className="form-step-indicator">Step 1 of 3: Recipe Info</div>
          </div>

          <div className="form-group">
            <label className="form-label">Recipe Name</label>
            <input
              type="text"
              className="form-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ex: Spaghetti Carbonara"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="ex: Tell us about your recipe. What makes it special?"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Cooking Time (minutes)</label>
              <input
                type="number"
                className="form-input"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="ex: 30"
                min="1"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Servings</label>
              <input
                type="number"
                className="form-input"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                placeholder="ex: 4"
                min="1"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Difficulty Level</label>
              <select
                className="form-input"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
              >
                <option value="">Select difficulty...</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Recipe Details</label>
              <input
                type="text"
                className="form-input"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="ex: Classic Italian pasta"
              />
            </div>
          </div>

          <div className="form-group form-row full">
            <label className="form-label">Ingredients (comma-separated)</label>
            <textarea
              className="form-textarea"
              name="ingredientsText"
              value={formData.ingredientsText}
              onChange={handleChange}
              placeholder="ex: 4 eggs, 100g pancetta, 100g parmesan cheese, 400g spaghetti"
              style={{ minHeight: '80px' }}
            />
          </div>

          <div className="form-group form-row full">
            <label className="form-label">📸 Recipe Image</label>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="imageMethod"
                  value="url"
                  checked={imageInputMethod === 'url'}
                  onChange={(e) => setImageInputMethod(e.target.value)}
                />
                URL Link
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="imageMethod"
                  value="file"
                  checked={imageInputMethod === 'file'}
                  onChange={(e) => setImageInputMethod(e.target.value)}
                />
                Upload File
              </label>
            </div>

            {imageInputMethod === 'url' ? (
              <input
                type="url"
                className="form-input"
                name="imageUrl"
                value={formData.imageUrl || ''}
                onChange={handleImageUrlChange}
                placeholder="ex: https://images.unsplash.com/photo-..."
              />
            ) : (
              <input
                type="file"
                className="form-input"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageFileChange}
              />
            )}

            {imagePreview && (
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.5rem' }}>Preview:</p>
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  style={{ 
                    maxWidth: '200px', 
                    maxHeight: '150px', 
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }} 
                />
              </div>
            )}
          </div>

          <div className="form-buttons">
            <button className="btn-form secondary" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn-form primary"
              onClick={onNext}
              disabled={!isComplete}
            >
              Next: Add Steps →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
