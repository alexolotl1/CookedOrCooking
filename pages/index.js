import { useState } from 'react';
import Navigation from '../src/components/Navigation';

import Home from '../src/pages/Home';
import Showcases from '../src/pages/Showcases';
import Recipes from '../src/pages/Recipes';
import Learn from '../src/pages/Learn';

import RecipeDetail from '../src/components/RecipeDetail';
import RecipeSteps from '../src/components/RecipeSteps';
import RecipeForm from '../src/components/RecipeForm';
import RecipeStepsForm from '../src/components/RecipeStepsForm';
import RecipePreview from '../src/components/RecipePreview';

import { recipes } from '../src/data/recipes';
import { addRecipeToViewed, recordRecipeShared } from '../src/data/userStats';

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

  const handlePublishRecipe = async () => {
    const ingredients = formData.ingredientsText
      .split(',')
      .map(ing => ing.trim())
      .filter(ing => ing)
      .join(', ');

    const newRecipe = {
      name: formData.name,
      description: formData.description,
      time: parseInt(formData.time),
      imageUrl: formData.imageUrl || null,
      details: formData.details || formData.description,
      ingredients: ingredients,
      servings: parseInt(formData.servings) || 1,
      difficulty: formData.difficulty || 'Easy',
      isVegetarian: false,
      isVegan: false,
      steps: creationSteps.filter(step => step.title && step.details)
    };

    try {
      // POST to MongoDB API
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe)
      });

      if (response.ok) {
        const result = await response.json();
        // Add to local recipes array for immediate display
        recipes.push({ id: recipes.length + 1, ...newRecipe });
        
        // Award XP for sharing recipe
        recordRecipeShared();

        setPublishSuccess(true);
        setTimeout(() => {
          handleCloseRecipeCreation();
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        alert(`Error publishing recipe: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error publishing recipe:', error);
      alert(`Error publishing recipe: ${error.message}`);
    }
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
