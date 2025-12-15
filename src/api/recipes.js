import { getRecipesCollection } from '../lib/mongodb.js';

export default async function handler(req, res) {
  const { method } = req;

  try {
    const recipesCollection = await getRecipesCollection();

    // GET - Fetch recipes
    if (method === 'GET') {
      const { featured } = req.query;
      const filter = featured === 'true' ? { featured: true } : {};
      
      const recipes = await recipesCollection
        .find(filter)
        .sort({ _id: -1 })
        .toArray();

      return res.status(200).json(recipes);
    }

    // POST - Create new recipe
    if (method === 'POST') {
      const { name, description, time, imageUrl, details, ingredients, servings, difficulty, isVegetarian, isVegan, steps } = req.body;

      if (!name || !description) {
        return res.status(400).json({ error: 'Name and description required' });
      }

      const newRecipe = {
        name,
        description,
        time: time || 30,
        imageUrl: imageUrl || null,
        image: '🍳',
        details: details || '',
        ingredients: ingredients || '',
        servings: servings || 2,
        difficulty: difficulty || 'Easy',
        isVegetarian: isVegetarian || false,
        isVegan: isVegan || false,
        steps: steps || [],
        featured: false,
        createdAt: new Date()
      };

      const result = await recipesCollection.insertOne(newRecipe);
      
      return res.status(201).json({ 
        message: 'Recipe created',
        id: result.insertedId,
        recipe: newRecipe
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}

