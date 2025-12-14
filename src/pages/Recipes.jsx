import RecipeCard from '../components/RecipeCard';

export default function Recipes({ recipes, onRecipeClick, onOpenRecipeCreation }) {
  return (
    <div className="page">
      <h2>Recipes</h2>
      <p>Browse our collection of delicious recipes</p>
      
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onRecipeClick={onRecipeClick} />
        ))}
      </div>

      <button className="submit-recipe-btn" onClick={onOpenRecipeCreation}>
        ✍️ Submit your own!
      </button>
    </div>
  );
}
