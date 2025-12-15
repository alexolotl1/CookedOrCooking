import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const mongoUri = process.env.MONGODB_URI;
  
  if (!mongoUri) {
    return res.status(500).json({
      status: '❌ No MongoDB URI',
      error: 'MONGODB_URI environment variable not set'
    });
  }

  const client = new MongoClient(mongoUri);
  
  try {
    await client.connect();
    const db = client.db('cooked-or-cooking');
    const collections = await db.listCollections().toArray();
    const recipesCollection = db.collection('recipes');
    const recipeCount = await recipesCollection.countDocuments();
    
    return res.status(200).json({
      status: '✅ Connected to MongoDB',
      database: 'cooked-or-cooking',
      collections: collections.map(c => c.name),
      recipeCount: recipeCount,
    });
  } catch (error) {
    console.error('Connection error:', error);
    return res.status(500).json({
      status: '❌ Connection failed',
      error: error.message
    });
  } finally {
    await client.close();
  }
}
