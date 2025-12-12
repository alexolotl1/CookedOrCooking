export default function Navigation({ currentPage, onPageChange }) {
  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1 className="nav-title">🍳 Cooked or Cooking</h1>
      </div>
      <ul className="nav-list">
        <li>
          <button 
            className={currentPage === 'home' ? 'nav-button active' : 'nav-button'}
            onClick={() => onPageChange('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            className={currentPage === 'showcases' ? 'nav-button active' : 'nav-button'}
            onClick={() => onPageChange('showcases')}
          >
            Showcases
          </button>
        </li>
        <li>
          <button 
            className={currentPage === 'recipes' ? 'nav-button active' : 'nav-button'}
            onClick={() => onPageChange('recipes')}
          >
            Recipes
          </button>
        </li>
        <li>
          <button 
            className={currentPage === 'learn' ? 'nav-button active' : 'nav-button'}
            onClick={() => onPageChange('learn')}
          >
            Learn
          </button>
        </li>
      </ul>
    </nav>
  );
}
