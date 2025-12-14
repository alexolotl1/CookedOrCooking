const STORAGE_KEY = 'cookedOrCooking_user';
const ACHIEVEMENTS_KEY = 'cookedOrCooking_achievements';

export const achievements = [
  {
    id: 1,
    title: 'New Chef',
    description: 'Made your first recipe',
    icon: '👨‍🍳',
    unlockCondition: (stats) => stats.recipesMade >= 1,
    category: 'cooking'
  },
  {
    id: 2,
    title: 'Cooking Enthusiast',
    description: 'Made 5 recipes',
    icon: '🔥',
    unlockCondition: (stats) => stats.recipesMade >= 5,
    category: 'cooking'
  },
  {
    id: 3,
    title: 'Master Chef',
    description: 'Made 10 recipes',
    icon: '🏆',
    unlockCondition: (stats) => stats.recipesMade >= 10,
    category: 'cooking'
  },
  {
    id: 4,
    title: 'Voter',
    description: 'Cast your first vote',
    icon: '🗳️',
    unlockCondition: (stats) => stats.votesCast >= 1,
    category: 'voting'
  },
  {
    id: 5,
    title: 'Decision Maker',
    description: 'Cast 5 votes',
    icon: '✅',
    unlockCondition: (stats) => stats.votesCast >= 5,
    category: 'voting'
  },
  {
    id: 6,
    title: 'Recipe Contributor',
    description: 'Shared your first recipe',
    icon: '📸',
    unlockCondition: (stats) => stats.recipesShared >= 1,
    category: 'sharing'
  },
  {
    id: 7,
    title: 'Community Builder',
    description: 'Shared 3 recipes',
    icon: '🤝',
    unlockCondition: (stats) => stats.recipesShared >= 3,
    category: 'sharing'
  },
  {
    id: 8,
    title: 'Daily Visitor',
    description: 'Logged in for 3 consecutive days',
    icon: '📅',
    unlockCondition: (stats) => stats.loginStreak >= 3,
    category: 'streaks'
  },
  {
    id: 9,
    title: 'Week Warrior',
    description: 'Logged in for 7 consecutive days',
    icon: '⚡',
    unlockCondition: (stats) => stats.loginStreak >= 7,
    category: 'streaks'
  },
  {
    id: 10,
    title: 'Step Warrior',
    description: 'Completed 10 recipe steps',
    icon: '👟',
    unlockCondition: (stats) => stats.stepsCompleted >= 10,
    category: 'steps'
  },
  {
    id: 11,
    title: 'Step Master',
    description: 'Completed 50 recipe steps',
    icon: '🎯',
    unlockCondition: (stats) => stats.stepsCompleted >= 50,
    category: 'steps'
  },
  {
    id: 12,
    title: 'XP Collector',
    description: 'Earned 1000 XP',
    icon: '⭐',
    unlockCondition: (stats) => stats.xp >= 1000,
    category: 'xp'
  }
];

export const defaultUserStats = {
  username: 'Guest',
  xp: 0,
  recipesMade: 0,
  recipesShared: 0,
  votesCast: 0,
  stepsCompleted: 0,
  loginStreak: 1,
  lastLoginDate: new Date().toISOString(),
  unlockedAchievements: [],
  viewedRecipes: [],
  createdAt: new Date().toISOString()
};

export function getUserStats() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return { ...defaultUserStats };
  } catch (error) {
    console.error('Error reading user stats:', error);
    return { ...defaultUserStats };
  }
}

export function saveUserStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    return true;
  } catch (error) {
    console.error('Error saving user stats:', error);
    return false;
  }
}

export function addXP(amount) {
  const stats = getUserStats();
  stats.xp += amount;
  saveUserStats(stats);
  return stats;
}

export function recordRecipeMade() {
  const stats = getUserStats();
  stats.recipesMade += 1;
  stats.xp += 50; // 50 XP for making a recipe
  saveUserStats(stats);
  return stats;
}

export function recordRecipeShared() {
  const stats = getUserStats();
  stats.recipesShared += 1;
  stats.xp += 100; // 100 XP for sharing a recipe
  saveUserStats(stats);
  return stats;
}

export function recordVote() {
  const stats = getUserStats();
  stats.votesCast += 1;
  stats.xp += 10; // 10 XP for voting
  saveUserStats(stats);
  return stats;
}

export function recordStepCompleted() {
  const stats = getUserStats();
  stats.stepsCompleted += 1;
  stats.xp += 5; // 5 XP per step
  saveUserStats(stats);
  return stats;
}

export function addRecipeToViewed(recipeId) {
  const stats = getUserStats();
  if (!stats.viewedRecipes.includes(recipeId)) {
    stats.viewedRecipes.push(recipeId);
    // Keep only last 10 viewed recipes
    if (stats.viewedRecipes.length > 10) {
      stats.viewedRecipes = stats.viewedRecipes.slice(-10);
    }
    saveUserStats(stats);
  }
  return stats;
}

export function updateLoginStreak() {
  const stats = getUserStats();
  const lastLogin = new Date(stats.lastLoginDate);
  const today = new Date();
  
  const lastLoginDate = new Date(lastLogin.getFullYear(), lastLogin.getMonth(), lastLogin.getDate());
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  const daysDiff = (todayDate - lastLoginDate) / (1000 * 60 * 60 * 24);
  
  if (daysDiff === 1) {
    stats.loginStreak += 1;
  } else if (daysDiff > 1) {
    stats.loginStreak = 1;
  }
  
  stats.lastLoginDate = today.toISOString();
  stats.xp += 5; // 5 XP for logging in
  saveUserStats(stats);
  return stats;
}

export function getUnlockedAchievements() {
  const stats = getUserStats();
  return achievements.filter(ach => ach.unlockCondition(stats));
}

export function checkAndUnlockAchievements() {
  const stats = getUserStats();
  const unlockedAchievements = getUnlockedAchievements();
  
  const newlyUnlocked = unlockedAchievements.filter(
    ach => !stats.unlockedAchievements.includes(ach.id)
  );
  
  if (newlyUnlocked.length > 0) {
    stats.unlockedAchievements = unlockedAchievements.map(ach => ach.id);
    saveUserStats(stats);
    return newlyUnlocked;
  }
  
  return [];
}

export function initializeUser() {
  let stats = getUserStats();
  
  stats = updateLoginStreak();
  
  checkAndUnlockAchievements();
  
  return stats;
}
