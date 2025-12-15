import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';
import { recipes } from '../data/recipes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '../../.env.local');

// Load environment variables from .env.local
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = envContent.split('\n').reduce((acc, line) => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex !== -1) {
      const key = trimmed.substring(0, eqIndex);
      const value = trimmed.substring(eqIndex + 1);
      if (key && value) {
        acc[key] = value;
      }
    }
  }
  return acc;
}, {});

Object.assign(process.env, envVars);

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'cooked-or-cooking';

async function seedDatabase() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(DB_NAME);
    const collection = db.collection('recipes');

    await collection.deleteMany({});
    const result = await collection.insertMany(recipes);
    
    console.log(`✅ Inserted ${result.insertedCount} recipes`);

    const sample = await collection.findOne();
    console.log('📖 Sample:', sample.name);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
    console.log('✅ Done!');
  }
}

seedDatabase();
