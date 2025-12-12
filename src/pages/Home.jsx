// Home page
export default function Home() {
  return (
    <div className="page">
      <h2>Welcome to Cooked or Cooking</h2>
      <p>Your guide to cooking delicious meals and learning new recipes</p>
      
      <div className="content-card">
        <h3>What is this?</h3>
        <p>This app helps you discover new recipes, learn cooking techniques, and showcase your best dishes. Whether you're a beginner or experienced cook, you'll find something useful here.</p>
      </div>

      <div className="features">
        <div className="feature-item">
          <h4>📖 Learn</h4>
          <p>Master basic cooking skills and techniques</p>
        </div>
        <div className="feature-item">
          <h4>🍴 Recipes</h4>
          <p>Browse our collection of easy recipes</p>
        </div>
        <div className="feature-item">
          <h4>✨ Showcases</h4>
          <p>See beautiful food photography and inspiration</p>
        </div>
      </div>
    </div>
  );
}
