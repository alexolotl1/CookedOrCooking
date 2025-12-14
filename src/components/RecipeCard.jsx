export default function RecipeCard({ recipe, onRecipeClick }) {
  return (
    <div className="recipe-card" onClick={() => onRecipeClick(recipe)}>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p className="recipe-desc">{recipe.description}</p>
    </div>
  );
}
