import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Showcases from './pages/Showcases';
import Recipes from './pages/Recipes';
import Learn from './pages/Learn';

import RecipeDetail from './components/RecipeDetail';
import RecipeSteps from './components/RecipeSteps';

import { recipes } from './data/recipes';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showRecipeDetail, setShowRecipeDetail] = useState(false);
  const [showRecipeSteps, setShowRecipeSteps] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipeDetail(true);
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'showcases':
        return <Showcases />;
      case 'recipes':
        return <Recipes recipes={recipes} onRecipeClick={handleRecipeClick} />;
      case 'learn':
        return <Learn />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="main-content">
        {renderPage()}

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
      </main>
    </div>
  );
}
