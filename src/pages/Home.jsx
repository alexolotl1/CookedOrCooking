import { useState, useEffect } from 'react';
import '../AdditionalApp.css';
import { initializeUser, getUserStats, achievements } from '../data/userStats';
import { recipes } from '../data/recipes';

export default function Home() {
  const [userStats, setUserStats] = useState(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [lastViewedRecipes, setLastViewedRecipes] = useState([]);

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
        .reverse(); 
      setLastViewedRecipes(viewed);
    }
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
        <h2 className="user-greeting">Welcome back, {userStats.username}!</h2>

        <div className="user-stats-grid">
          <div className="stat-card xp">
            <div className="stat-icon">⭐</div>
            <p className="stat-value">{userStats.xp}</p>
            <p className="stat-label">Total XP</p>
          </div>

          <div className="stat-card recipes">
            <div className="stat-icon">🍴</div>
            <p className="stat-value">{userStats.recipesMade}</p>
            <p className="stat-label">Recipes Made</p>
          </div>

          <div className="stat-card streak">
            <div className="stat-icon">🔥</div>
            <p className="stat-value">{userStats.loginStreak}</p>
            <p className="stat-label">Login Streak</p>
          </div>
        </div>
      </div>

      {lastViewedRecipes.length > 0 && (
        <div className="last-viewed-section">
          <h2 className="section-title">📚 Last Viewed Recipes</h2>
          <div className="last-viewed-grid">
            {lastViewedRecipes.map(recipe => (
              <div key={recipe.id} className="last-viewed-card">
                <div className="last-viewed-emoji">{recipe.image}</div>
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
