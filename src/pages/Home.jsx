import { useState, useEffect } from 'react';
import { initializeUser, getUserStats, achievements } from '../data/userStats';
import { recipes } from '../data/recipes';

export default function Home() {
  const [userStats, setUserStats] = useState(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [lastViewedRecipes, setLastViewedRecipes] = useState([]);
  const [completedRecipes, setCompletedRecipes] = useState(0);

  useEffect(() => {
    const stats = initializeUser();
    setUserStats(stats);

    const unlocked = achievements.filter(ach => 
      stats.unlockedAchievements.includes(ach.id)
    );
    setUnlockedAchievements(unlocked);

    if (stats.viewedRecipes && stats.viewedRecipes.length > 0) {
      const viewed = stats.viewedRecipes
        .map(recipeId => recipes.find(r => r.id === recipeId))
        .filter(Boolean)
        .reverse()
        .slice(0, 5); 
      setLastViewedRecipes(viewed);
    }

    const avgStepsPerRecipe = 6;
    const completed = Math.floor(stats.stepsCompleted / avgStepsPerRecipe);
    setCompletedRecipes(completed);
  }, []);

  if (!userStats) {
    return <div className="page">Loading...</div>;
  }

  return (
    <div className="page">
      <div className="home-welcome">
        <h1>🥕 Welcome to Cooked or Cooking</h1>
        <p>
          A community driven platform where cooking enthusiasts learn, share, and celebrate culinary achievements together. 
          Browse recipes, vote on your favorites, contribute your own creations, and earn achievements as you grow your cooking skills. 
          Whether you're a beginner or a seasoned chef, there's always something delicious to discover!
        </p>
      </div>

      <div className="home-user-section">
        <div className="user-header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK68cj0Hcizmq5Y6AN6m5bOlvOi0ab3QvdTw&s" className="profile-image-placeholder"></img>
          <div className="user-info-column">
            <h2 className="user-guest-text">Guest</h2>
            <p className="user-join-text">Joined on Dec 3 2025</p>
          </div>
        </div>

        <div className="user-stats-grid-2x2">
          <div className="stat-card-small xp">
            <div className="stat-icon-small">⭐</div>
            <p className="stat-value-small">{userStats.xp}</p>
            <p className="stat-label-small">Total XP</p>
          </div>

          <div className="stat-card-small recipes">
            <div className="stat-icon-small">🍴</div>
            <p className="stat-value-small">{completedRecipes}</p>
            <p className="stat-label-small">Recipes Completed</p>
          </div>

          <div className="stat-card-small streak">
            <div className="stat-icon-small">🔥</div>
            <p className="stat-value-small">{userStats.loginStreak}</p>
            <p className="stat-label-small">Login Streak</p>
          </div>

          <div className="stat-card-small submitted">
            <div className="stat-icon-small">📸</div>
            <p className="stat-value-small">{userStats.recipesShared}</p>
            <p className="stat-label-small">Recipes Submitted</p>
          </div>
        </div>
      </div>

      {lastViewedRecipes.length > 0 && (
        <div className="last-viewed-section">
          <h2 className="section-title">Last Viewed Recipes</h2>
          <div className="last-viewed-grid">
            {lastViewedRecipes.map(recipe => (
              <div key={recipe.id} className="last-viewed-card">
                <div className="last-viewed-image">
                  <img src={recipe.imageUrl} alt={recipe.name}></img>
                </div>
                
                <p className="last-viewed-name">{recipe.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="achievements-section">
        <h2 className="section-title">
          🏆 Achievements ({unlockedAchievements.length}/{achievements.length})
        </h2>
        <div className="achievements-scroll">
          {achievements.map(achievement => {
            const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
            return (
              <div
                key={achievement.id}
                className={`achievement-card ${!isUnlocked ? 'locked' : ''}`}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
