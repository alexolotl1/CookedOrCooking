import { useState } from 'react';

export default function RecipeDetail({ recipe, onClose, onStartCooking }) {
  const [userRating, setUserRating] = useState(0);
  const [showRatingPrompt, setShowRatingPrompt] = useState(false);
  const [recipeRating] = useState(Math.floor(Math.random() * 2) + 3); // Random 3-5

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <div className="recipe-detail-header">
          <div className="recipe-detail-image">
            <img src={recipe.imageUrl} alt={recipe.name} style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
          <div className="recipe-detail-info">
            <h2>{recipe.name}</h2>
            <p className="recipe-detail-description">{recipe.description}</p>
            
            <div className="recipe-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < recipeRating ? 'star filled' : 'star'}>🥕</span>
                ))}
              </div>
              <span className="rating-value">{recipeRating}/5</span>
            </div>

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
