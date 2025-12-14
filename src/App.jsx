import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Showcases from './pages/Showcases';
import Recipes from './pages/Recipes';
import Learn from './pages/Learn';

import RecipeDetail from './components/RecipeDetail';
import RecipeSteps from './components/RecipeSteps';
import RecipeForm from './components/RecipeForm';
import RecipeStepsForm from './components/RecipeStepsForm';
import RecipePreview from './components/RecipePreview';

import { recipes } from './data/recipes';
import { addRecipeToViewed, recordRecipeShared } from './data/userStats';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showRecipeDetail, setShowRecipeDetail] = useState(false);
  const [showRecipeSteps, setShowRecipeSteps] = useState(false);

  const [showRecipeCreation, setShowRecipeCreation] = useState(false);
  const [creationStep, setCreationStep] = useState(1);
  const [creationSteps, setCreationSteps] = useState([{
    number: 1,
    title: '',
    details: ''
  }]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    time: '',
    servings: '',
    difficulty: '',
    details: '',
    ingredientsText: ''
  });
  const [publishSuccess, setPublishSuccess] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipeDetail(true);
    // Track viewed recipe
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

  const handleOpenRecipeCreation = () => {
    setShowRecipeCreation(true);
    setCreationStep(1);
    setFormData({
      name: '',
      description: '',
      time: '',
      servings: '',
      difficulty: '',
      details: '',
      ingredientsText: ''
    });
    setCreationSteps([{
      number: 1,
      title: '',
      details: ''
    }]);
    setPublishSuccess(false);
  };

  const handleCloseRecipeCreation = () => {
    setShowRecipeCreation(false);
    setCreationStep(1);
  };

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleCreationStepsChange = (steps) => {
    setCreationSteps(steps);
  };

  const handleNextCreationStep = () => {
    setCreationStep(creationStep + 1);
  };

  const handleBackCreationStep = () => {
    setCreationStep(creationStep - 1);
  };

  const handlePublishRecipe = () => {
    const ingredients = formData.ingredientsText
      .split(',')
      .map(ing => ing.trim())
      .filter(ing => ing);

    const newRecipe = {
      id: Math.max(...recipes.map(r => r.id), 0) + 1,
      name: formData.name,
      description: formData.description,
      time: parseInt(formData.time),
      image: '🍽️',
      details: formData.details || formData.description,
      ingredients: ingredients,
      servings: parseInt(formData.servings) || 1,
      difficulty: formData.difficulty || 'Easy',
      steps: creationSteps.filter(step => step.title && step.details)
    };

    recipes.push(newRecipe);
    
    // Award XP for sharing recipe
    recordRecipeShared();

    setPublishSuccess(true);
    setTimeout(() => {
      handleCloseRecipeCreation();
    }, 2000);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'showcases':
        return <Showcases />;
      case 'recipes':
        return <Recipes 
          recipes={recipes} 
          onRecipeClick={handleRecipeClick}
          onOpenRecipeCreation={handleOpenRecipeCreation}
        />;
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

        {showRecipeCreation && (
          <>
            {publishSuccess && (
              <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                zIndex: 1001,
                textAlign: 'center',
                minWidth: '300px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h2 style={{ color: '#1e8449', margin: '0 0 0.5rem 0' }}>Recipe Published!</h2>
                <p style={{ color: '#5a6c7d', margin: '0' }}>Your recipe has been added to our collection.</p>
              </div>
            )}

            {creationStep === 1 && (
              <RecipeForm
                formData={formData}
                onFormChange={handleFormChange}
                onNext={handleNextCreationStep}
                onClose={handleCloseRecipeCreation}
              />
            )}

            {creationStep === 2 && (
              <RecipeStepsForm
                formData={formData}
                creationSteps={creationSteps}
                onStepsChange={handleCreationStepsChange}
                onBack={handleBackCreationStep}
                onNext={handleNextCreationStep}
                onClose={handleCloseRecipeCreation}
              />
            )}

            {creationStep === 3 && (
              <RecipePreview
                formData={formData}
                creationSteps={creationSteps}
                onBack={handleBackCreationStep}
                onPublish={handlePublishRecipe}
                onClose={handleCloseRecipeCreation}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
