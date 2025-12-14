import '../AdditionalApp.css';

export default function RecipeForm({ formData, onFormChange, onNext, onClose }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ ...formData, [name]: value });
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
