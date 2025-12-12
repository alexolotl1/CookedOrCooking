// RecipeCard component - reusable card for displaying a single recipe
export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p className="recipe-desc">{recipe.description}</p>
      <p className="recipe-time">⏱️ {recipe.time} mins</p>
    </div>
  );
}
