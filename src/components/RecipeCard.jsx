export default function RecipeCard({ recipe, onRecipeClick }) {
  const recipeRating = Math.floor(Math.random() * 2) + 3; // Random 3-5

  return (
    <div className="recipe-card" onClick={() => onRecipeClick(recipe)}>
      <div className="recipe-card-image">
        <img src={recipe.imageUrl} className="recipe-emoji" alt={recipe.name}></img>
      </div>
      <div className="recipe-card-content">
        <h3>{recipe.name}</h3>
        <p className="recipe-desc">{recipe.description}</p>
  
        <div className="recipe-rating-small">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < recipeRating ? 'star-small filled' : 'star-small'}>🥕</span>
            ))}
          </div>
      </div>
    </div>
  );
}
