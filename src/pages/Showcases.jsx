import { useState } from 'react';
import '../AdditionalApp.css';
import { recipes, recipeCategories } from '../data/recipes';
import RecipeDetail from '../components/RecipeDetail';
import RecipeSteps from '../components/RecipeSteps';
import { recordVote, addRecipeToViewed } from '../data/userStats';

export default function Showcases() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [userVote, setUserVote] = useState(null);
  const [voteCounts, setVoteCounts] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showRecipeDetail, setShowRecipeDetail] = useState(false);
  const [showRecipeSteps, setShowRecipeSteps] = useState(false);

  const featuredRecipes = recipes.filter(recipe => recipe.featured);

  // Group featured recipes by category
  const featuredByCategory = {
    holiday: featuredRecipes.filter(r => r.category === 'holiday'),
    asian: featuredRecipes.filter(r => r.category === 'asian'),
    fish: featuredRecipes.filter(r => r.category === 'fish')
  };

  const pastWinnersCategories = [
    {
      id: 'holiday',
      name: recipeCategories.holiday,
      buttonClass: 'category-quick-btn',
      dishes: featuredByCategory.holiday
    },
    {
      id: 'asian',
      name: recipeCategories.asian,
      buttonClass: 'category-asian-btn',
      dishes: featuredByCategory.asian
    },
    {
      id: 'fish',
      name: recipeCategories.fish,
      buttonClass: 'category-desserts-btn',
      dishes: featuredByCategory.fish
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipeDetail(true);
    addRecipeToViewed(recipe.id);
  };

  const handleStartCooking = () => {
    setShowRecipeDetail(false);
    setShowRecipeSteps(true);
  };

  const handleCloseModal = () => {
    setShowRecipeDetail(false);
    setShowRecipeSteps(false);
    setSelectedRecipe(null);
  };

  const handleVote = (dishId) => {
    if (!userVote) {
      recordVote();
      setUserVote(dishId);
      setVoteCounts(prev => ({
        ...prev,
        [dishId]: (prev[dishId] || 0) + 1
      }));
    }
  };

  return (
    <div className="page showcases-container">
      <div className="showcases-section">
        <h2 className="showcases-section-title">🏆 Past Winners</h2>
        <p className="showcases-section-subtitle">Featured dishes from previous competitions. Click to view full recipe!</p>

        <div className="past-winners-container">
          {pastWinnersCategories.map(category => (
            <div key={category.id} className={`winner-category-${category.id}`}>
              <button
                className={`winner-category-btn ${category.buttonClass} ${
                  expandedCategory === category.id ? 'active' : ''
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.name}</span>
                <span className={`winner-category-toggle ${
                  expandedCategory === category.id ? 'open' : ''
                }`}>▼</span>
              </button>

              <div
                className={`winner-dishes-container ${
                  expandedCategory === category.id ? 'open' : ''
                }`}
              >
                <div className="winner-dishes-grid">
                  {category.dishes.map(dish => (
                    <div
                      key={dish.id}
                      className="winner-dish-card"
                      onClick={() => handleRecipeClick(dish)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={dish.imageUrl} alt={dish.name} className={`winner-dish-image winner-dish-image-${category.id}`} />
                      <div className="winner-dish-info">
                        <h4 className="winner-dish-name">{dish.name}</h4>
                        <p className="winner-dish-desc">{dish.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="showcases-section">
        <div className="voting-section">
          <div className="voting-header">
            <h2>🗳️ Vote for Best Holiday Dishes 2025</h2>
            <p>Help us choose the best holiday dish for our featured recipes! Click to view full recipe.</p>
          </div>

          {userVote && (
            <div className="voting-status already-voted">
              ✓ Thank you for voting! You voted for <strong>{featuredByCategory.holiday.find(d => d.id === userVote)?.name}</strong>
            </div>
          )}

          {!userVote && (
            <div className="voting-status">
              Click on your favorite dish below to cast your vote (you can only vote once)
            </div>
          )}

          <div className="voting-dishes-grid">
            {featuredByCategory.holiday.map(dish => (
              <div
                key={dish.id}
                className={`voting-dish-card ${userVote === dish.id ? 'voted-for' : ''}`}
              >
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className="voting-dish-image"
                  onClick={() => handleRecipeClick(dish)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="voting-dish-content">
                  <h4
                    className="voting-dish-name"
                    onClick={() => handleRecipeClick(dish)}
                    style={{ cursor: 'pointer' }}
                  >
                    {dish.name}
                  </h4>
                  <p className="voting-dish-description">{dish.description}</p>
                  <div className="voting-dish-info">
                    <div className="voting-dish-time">⏱️ {dish.time} mins</div>
                    <div className="voting-dish-difficulty">📊 {dish.difficulty}</div>
                  </div>
                  <button
                    className={`voting-vote-btn ${userVote === dish.id ? 'voted' : ''}`}
                    onClick={() => handleVote(dish.id)}
                    disabled={userVote !== null && userVote !== dish.id}
                  >
                    {userVote === dish.id ? '✓ Your Vote' : '👍 Vote'}
                  </button>
                  {voteCounts[dish.id] > 0 && (
                    <div className="voting-vote-count">
                      {voteCounts[dish.id]} vote{voteCounts[dish.id] > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showRecipeDetail && selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={handleCloseModal} 
          onStartCooking={handleStartCooking} 
        />
      )}

      {showRecipeSteps && selectedRecipe && (
        <RecipeSteps 
          recipe={selectedRecipe} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}
