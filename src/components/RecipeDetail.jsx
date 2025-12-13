export default function RecipeDetail({ recipe, onClose, onStartCooking }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="recipe-detail-header">
          <div className="recipe-detail-image">
            <div style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, #a8e6cf 0%, #56ab2f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
              🍳
            </div>
          </div>
          <div className="recipe-detail-info">
            <h2>{recipe.name}</h2>
            <p className="recipe-detail-description">{recipe.description}</p>
            <div className="recipe-meta">
              <span>⏱️ {recipe.time} mins</span>
              <span>👥 {recipe.servings} servings</span>
              <span>📊 {recipe.difficulty}</span>
            </div>
          </div>
        </div>

        <div className="recipe-detail-body">
          <div className="detail-section">
            <h3>About this recipe</h3>
            <p>{recipe.details}</p>
          </div>

          <div className="detail-section">
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
          </div>

          <div className="detail-section">
            <h3>Steps Overview</h3>
            <p>This recipe has {recipe.steps.length} steps. Click "Let's Cook!" to start cooking step-by-step.</p>
          </div>
        </div>

        <div className="modal-buttons">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={onStartCooking}>Let's Cook! →</button>
        </div>
      </div>
    </div>
  );
}
