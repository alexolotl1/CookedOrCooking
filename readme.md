# Cooked or Cooking - React Recipe App

A beginner-friendly React app demonstrating folder structure, components, and state management. This app helps people who struggle with cooking to cook better by showing them the correct steps to cook and the discovery of new dishes.

## 📁 Project Structure (Fixed!)

Your project is now correctly structured for deployment on Vercel or GitHub Pages:

```
CookedOrCooking/
├── src/                         # React app code
│   ├── components/              # Reusable components
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   └── RecipeCard.jsx
│   │
│   ├── pages/                   # Main page components (your 3 pages)
│   │   ├── Home.jsx
│   │   ├── Recipes.jsx
│   │   └── About.jsx
│   │
│   ├── data/                    # Static data
│   │   └── recipes.js
│   │
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global styling
│   └── index.jsx                # Entry point
│
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── node_modules/               # Dependencies (auto-generated)
└── README.md                    # This file
```

## 🚀 How to Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## 💡 Key Concepts

- **State Management**: Uses `useState` to switch between pages
- **Component Props**: Data flows from parent to child components
- **Reusable Components**: RecipeCard is used in multiple pages
- **Data Separation**: Recipes are stored in `src/data/recipes.js`

## 📝 Quick Changes

**Add a recipe**: Edit `src/data/recipes.js`  
**Create a component**: Add file to `src/components/`  
**Add a page**: Create in `src/pages/` and add to `App.jsx`

## 🔧 Deployment

Ready for Vercel or GitHub Pages! Just push to GitHub and connect to Vercel.
