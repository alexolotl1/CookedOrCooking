import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI not defined in environment variables');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // If we have a cached connection, return it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Create new connection
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db('cooked-or-cooking');
    
    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function getRecipesCollection() {
  const { db } = await connectToDatabase();
  return db.collection('recipes');
}
