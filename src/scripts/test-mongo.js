import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

const MONGODB_URI = envVars.MONGODB_URI;

console.log('🔍 Testing MongoDB Connection...\n');
console.log('URI found:', MONGODB_URI ? '✅ Yes' : '❌ No');

if (!MONGODB_URI) {
  console.log('❌ ERROR: MONGODB_URI not found in .env.local');
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI);

try {
  console.log('⏳ Connecting to MongoDB...');
  await client.connect();
  console.log('✅ Connected!\n');

  const db = client.db('cooked-or-cooking');
  
  console.log('📊 Database: cooked-or-cooking');
  
  const collections = await db.listCollections().toArray();
  console.log('📁 Collections:', collections.map(c => c.name).join(', ') || 'None');
  
  const recipesCollection = db.collection('recipes');
  const recipeCount = await recipesCollection.countDocuments();
  console.log('🍳 Recipes in DB:', recipeCount);
  
  if (recipeCount > 0) {
    const sample = await recipesCollection.findOne();
    console.log('\n📖 Sample recipe:');
    console.log('   Name:', sample.name);
    console.log('   Has imageUrl:', !!sample.imageUrl);
  }

} catch (error) {
  console.error('❌ ERROR:', error.message);
  process.exit(1);
} finally {
  await client.close();
  console.log('\n✅ Test complete');
}
