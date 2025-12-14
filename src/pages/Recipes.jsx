import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import '../AdditionalApp.css';

const COMMON_INGREDIENTS = [
  'Eggs', 'Flour', 'Milk', 'Sugar', 'Butter', 'Salt', 'Pepper', 'Garlic',
  'Onion', 'Tomato', 'Chicken', 'Beef', 'Fish', 'Rice', 'Pasta', 'Cheese'
];

const DIETARY_OPTIONS = [
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Vegan', value: 'vegan' }
];

export default function Recipes({ recipes, onRecipeClick, onOpenRecipeCreation }) {
  const [searchTitle, setSearchTitle] = useState('');
  const [showIngredientFilter, setShowIngredientFilter] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState(null);

  const handleIngredientToggle = (ingredient) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };
  const handleDietaryToggle = (value) => {
    setSelectedDietary(selectedDietary === value ? null : value);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesTitle = recipe.name.toLowerCase().includes(searchTitle.toLowerCase());
    
    const matchesIngredients = selectedIngredients.length === 0 || 
      selectedIngredients.some(ing => recipe.ingredients.toLowerCase().includes(ing.toLowerCase()));
    
    let matchesDietary = true;
    if (selectedDietary === 'vegetarian') {
      matchesDietary = recipe.isVegetarian;
    } else if (selectedDietary === 'vegan') {
      matchesDietary = recipe.isVegan;
    }
    
    return matchesTitle && matchesIngredients && matchesDietary;
  });

  return (
    <div className="page">
      <h2>Browse</h2>
      <p>Explore our delicious recipes</p>
      
      <div className="recipes-search-section">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search recipes by name..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button 
            className="filter-toggle-btn"
            onClick={() => setShowIngredientFilter(!showIngredientFilter)}
          >
            Filters
          </button>
        </div>

        {showIngredientFilter && (
          <div className="ingredient-filter-dropdown">
            <div className="filter-section">
              <h4>Ingredients You Have</h4>
              <div className="ingredient-list">
                {COMMON_INGREDIENTS.map(ingredient => (
                  <label key={ingredient} className="ingredient-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedIngredients.includes(ingredient)}
                      onChange={() => handleIngredientToggle(ingredient)}
                    />
                    <span>{ingredient}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Dietary Preferences</h4>
              {DIETARY_OPTIONS.map(option => (
                <label key={option.value} className="dietary-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedDietary === option.value}
                    onChange={() => handleDietaryToggle(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>

            <button 
              className="filter-close-btn"
              onClick={() => setShowIngredientFilter(false)}
            >
              ✕ Close
            </button>
          </div>
        )}
      </div>
      
      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onRecipeClick={onRecipeClick} />
          ))
        ) : (
          <p className="no-recipes-message">No recipes found. Try adjusting your filters!</p>
        )}
      </div>

      <button className="submit-recipe-btn" onClick={onOpenRecipeCreation}>
        ✍️ Submit your own!
      </button>
    </div>
  );
}
