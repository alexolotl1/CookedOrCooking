export const recipes = [
  {
    id: 1,
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with creamy sauce',
    time: 20,
    image: 'https://via.placeholder.com/300x200?text=Pasta+Carbonara',
    details: 'Authentic Roman pasta dish made with eggs, cheese, and guanciale. A simple yet elegant meal.',
    ingredients: 'Pasta, eggs, pecorino romano, guanciale, black pepper',
    servings: 4,
    difficulty: 'Medium',
    steps: [
      { number: 1, title: 'Cook the pasta', details: 'Boil water in a large pot, add salt, and cook pasta until al dente. Reserve 1 cup of pasta water.' },
      { number: 2, title: 'Prepare the sauce', details: 'In a bowl, mix egg yolks with grated pecorino romano cheese and freshly cracked black pepper.' },
      { number: 3, title: 'Cook the guanciale', details: 'Cut guanciale into small pieces and cook in a pan until crispy, about 5-7 minutes.' },
      { number: 4, title: 'Combine everything', details: 'Toss hot pasta with guanciale and fat. Remove from heat, then add egg mixture while stirring continuously.' },
      { number: 5, title: 'Finish and serve', details: 'Add pasta water as needed for creaminess. Serve immediately with extra cheese and black pepper.' }
    ]
  },
  {
    id: 2,
    name: 'Chicken Stir Fry',
    description: 'Quick and delicious stir fried chicken with vegetables',
    time: 25,
    image: 'https://via.placeholder.com/300x200?text=Chicken+Stir+Fry',
    details: 'A fast and flavorful Asian-inspired dish loaded with colorful vegetables and tender chicken.',
    ingredients: 'Chicken breast, bell peppers, broccoli, soy sauce, garlic, ginger, sesame oil',
    servings: 3,
    difficulty: 'Easy',
    steps: [
      { number: 1, title: 'Prep ingredients', details: 'Cut chicken into bite-sized pieces. Chop vegetables into similar sizes for even cooking.' },
      { number: 2, title: 'Marinate chicken', details: 'Mix chicken with soy sauce and garlic. Let sit for 10 minutes.' },
      { number: 3, title: 'Heat the wok', details: 'Heat sesame oil in a wok or large pan over high heat until smoking.' },
      { number: 4, title: 'Cook chicken first', details: 'Add chicken and cook until golden, about 5-7 minutes. Remove and set aside.' },
      { number: 5, title: 'Stir fry vegetables', details: 'Add vegetables and stir fry for 3-4 minutes. Return chicken, toss everything together.' },
      { number: 6, title: 'Serve hot', details: 'Serve immediately over rice or noodles while everything is still hot and crispy.' }
    ]
  },
  {
    id: 3,
    name: 'Chocolate Chip Cookies',
    description: 'Homemade cookies loaded with chocolate chips',
    time: 30,
    image: 'https://via.placeholder.com/300x200?text=Chocolate+Cookies',
    details: 'Soft and chewy cookies with melty chocolate chips. Perfect for snacking or dessert.',
    ingredients: 'Flour, butter, sugar, eggs, vanilla, chocolate chips, baking soda, salt',
    servings: 24,
    difficulty: 'Easy',
    steps: [
      { number: 1, title: 'Preheat oven', details: 'Preheat oven to 375°F (190°C).' },
      { number: 2, title: 'Cream butter and sugar', details: 'Mix softened butter with brown and white sugar until light and fluffy, about 2 minutes.' },
      { number: 3, title: 'Add eggs and vanilla', details: 'Beat in eggs one at a time, then add vanilla extract. Mix until combined.' },
      { number: 4, title: 'Combine dry ingredients', details: 'Mix flour, baking soda, and salt in a separate bowl.' },
      { number: 5, title: 'Mix dough', details: 'Gradually add dry ingredients to wet ingredients. Fold in chocolate chips.' },
      { number: 6, title: 'Bake cookies', details: 'Drop spoonfuls onto baking sheet. Bake for 9-11 minutes until golden brown.' }
    ]
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with crispy croutons and parmesan',
    time: 10,
    image: 'https://via.placeholder.com/300x200?text=Caesar+Salad',
    details: 'Classic Caesar salad with homemade dressing. Light yet satisfying.',
    ingredients: 'Romaine lettuce, parmesan, croutons, anchovy paste, garlic, lemon, olive oil',
    servings: 2,
    difficulty: 'Easy',
    steps: [
      { number: 1, title: 'Prepare lettuce', details: 'Wash and dry romaine lettuce. Tear into bite-sized pieces.' },
      { number: 2, title: 'Make dressing', details: 'Mix anchovy paste, garlic, lemon juice, and olive oil in a bowl.' },
      { number: 3, title: 'Toss salad', details: 'Add lettuce to dressing and toss until well coated.' },
      { number: 4, title: 'Add toppings', details: 'Top with croutons, parmesan shavings, and cracked black pepper.' },
      { number: 5, title: 'Serve immediately', details: 'Serve right away while everything is fresh and crisp.' }
    ]
  },
  {
    id: 5,
    name: 'Grilled Salmon',
    description: 'Perfectly grilled salmon fillet with lemon butter sauce',
    time: 20,
    image: 'https://via.placeholder.com/300x200?text=Grilled+Salmon',
    details: 'Healthy and elegant salmon with a zesty lemon butter sauce.',
    ingredients: 'Salmon fillets, butter, lemon, garlic, salt, pepper, olive oil',
    servings: 2,
    difficulty: 'Easy',
    steps: [
      { number: 1, title: 'Prepare salmon', details: 'Pat salmon dry and season with salt and pepper.' },
      { number: 2, title: 'Heat grill', details: 'Preheat grill to medium-high heat. Oil the grates.' },
      { number: 3, title: 'Grill salmon', details: 'Place salmon skin-side down on grill. Cook for 6-8 minutes without moving.' },
      { number: 4, title: 'Flip and finish', details: 'Flip salmon and cook for another 3-4 minutes until cooked through.' },
      { number: 5, title: 'Make sauce', details: 'Melt butter, add lemon juice and minced garlic. Drizzle over salmon.' },
      { number: 6, title: 'Serve', details: 'Serve hot with vegetables or rice on the side.' }
    ]
  },
  {
    id: 6,
    name: 'Vegetable Soup',
    description: 'Hearty soup packed with seasonal vegetables',
    time: 35,
    image: 'https://via.placeholder.com/300x200?text=Vegetable+Soup',
    details: 'Warm, comforting vegetable soup that\'s perfect for any season.',
    ingredients: 'Carrots, celery, onions, potatoes, tomatoes, vegetable broth, herbs',
    servings: 6,
    difficulty: 'Easy',
    steps: [
      { number: 1, title: 'Prep vegetables', details: 'Dice carrots, celery, onions, and potatoes into uniform sizes.' },
      { number: 2, title: 'Sauté aromatics', details: 'Heat olive oil and cook onions and celery until softened, about 5 minutes.' },
      { number: 3, title: 'Add remaining vegetables', details: 'Add carrots and potatoes. Stir and cook for 3 minutes.' },
      { number: 4, title: 'Add broth and tomatoes', details: 'Pour in vegetable broth and diced tomatoes. Bring to a boil.' },
      { number: 5, title: 'Simmer', details: 'Reduce heat and simmer for 20 minutes until vegetables are tender.' },
      { number: 6, title: 'Season and serve', details: 'Add salt, pepper, and herbs to taste. Serve hot with bread.' }
    ]
  },
];
