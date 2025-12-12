import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import Showcases from './pages/Showcases';
import Recipes from './pages/Recipes';
import Learn from './pages/Learn';

import { recipes } from './data/recipes';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'showcases':
        return <Showcases />;
      case 'recipes':
        return <Recipes recipes={recipes} />;
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
      </main>
    </div>
  );
}
