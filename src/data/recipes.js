//AI SAMPLE DATA

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
  {
    id: 7,
    name: 'Pad Thai',
    description: 'Spicy stir-fried rice noodles with shrimp and peanuts',
    time: 25,
    image: '🥢',
    details: 'Authentic Thai street food with a perfect balance of sweet, salty, sour, and spicy flavors.',
    ingredients: 'Rice noodles, shrimp, eggs, peanuts, lime, fish sauce, tamarind, garlic, chili',
    servings: 2,
    difficulty: 'Easy',
    category: 'asian',
    isWinner: true,
    steps: [
      { number: 1, title: 'Soak noodles', details: 'Soak rice noodles in warm water for 15 minutes until softened.' },
      { number: 2, title: 'Prepare sauce', details: 'Mix tamarind paste, fish sauce, and palm sugar in a bowl.' },
      { number: 3, title: 'Cook in wok', details: 'Heat oil in wok, add garlic and cook for 1 minute.' },
      { number: 4, title: 'Add protein', details: 'Add shrimp and cook until pink, about 3 minutes.' },
      { number: 5, title: 'Add noodles and sauce', details: 'Add drained noodles and sauce, toss well for 2-3 minutes.' },
      { number: 6, title: 'Finish and serve', details: 'Top with crushed peanuts, lime wedge, and chili. Serve immediately.' }
    ]
  },
  {
    id: 8,
    name: 'Chicken Teriyaki',
    description: 'Glazed chicken with a rich savory-sweet sauce',
    time: 30,
    image: '🍗',
    details: 'Japanese-inspired glazed chicken that\'s tender on the inside and caramelized on the outside.',
    ingredients: 'Chicken thighs, soy sauce, sake, mirin, sugar, ginger, garlic, green onions',
    servings: 4,
    difficulty: 'Medium',
    category: 'asian',
    isWinner: true,
    steps: [
      { number: 1, title: 'Prepare chicken', details: 'Cut chicken thighs into bite-sized pieces.' },
      { number: 2, title: 'Make teriyaki sauce', details: 'Mix soy sauce, sake, mirin, and sugar. Set aside.' },
      { number: 3, title: 'Heat pan', details: 'Heat oil in a pan over medium-high heat.' },
      { number: 4, title: 'Cook chicken', details: 'Cook chicken until golden, about 5-7 minutes.' },
      { number: 5, title: 'Add sauce', details: 'Pour teriyaki sauce over chicken and simmer for 5 minutes until glossy.' },
      { number: 6, title: 'Garnish and serve', details: 'Top with green onions and sesame seeds. Serve with rice.' }
    ]
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich, molten chocolate center with warm gooey goodness',
    time: 35,
    image: '🍫',
    details: 'Elegant French dessert with a flowing chocolate center. Perfect for chocolate lovers.',
    ingredients: 'Dark chocolate, butter, eggs, sugar, flour, vanilla, salt',
    servings: 4,
    difficulty: 'Hard',
    category: 'desserts',
    isWinner: true,
    steps: [
      { number: 1, title: 'Preheat oven', details: 'Preheat oven to 425°F (220°C). Grease ramekins well.' },
      { number: 2, title: 'Melt chocolate', details: 'Melt dark chocolate and butter together in a double boiler.' },
      { number: 3, title: 'Beat eggs', details: 'Whisk eggs and sugar until pale and fluffy, about 3 minutes.' },
      { number: 4, title: 'Combine mixtures', details: 'Fold chocolate mixture into eggs. Add flour and vanilla gently.' },
      { number: 5, title: 'Fill ramekins', details: 'Pour batter into ramekins, filling about three-quarters full.' },
      { number: 6, title: 'Bake and serve', details: 'Bake for 12-14 minutes until edges are set but center is soft. Serve immediately.' }
    ]
  },
  {
    id: 10,
    name: 'Strawberry Cheesecake',
    description: 'Creamy cheesecake with fresh strawberry topping',
    time: 120,
    image: '🍰',
    details: 'Classic New York style cheesecake with a delicious strawberry compote.',
    ingredients: 'Cream cheese, sugar, eggs, graham cracker crust, strawberries, lemon juice',
    servings: 8,
    difficulty: 'Medium',
    category: 'desserts',
    isWinner: true,
    steps: [
      { number: 1, title: 'Prepare crust', details: 'Mix crushed graham crackers with melted butter. Press into pan.' },
      { number: 2, title: 'Make filling', details: 'Beat cream cheese and sugar until smooth. Add eggs one at a time.' },
      { number: 3, title: 'Pour filling', details: 'Pour filling over crust. Smooth the top.' },
      { number: 4, title: 'Bake', details: 'Bake at 325°F for 55-60 minutes until center is just set.' },
      { number: 5, title: 'Cool slowly', details: 'Turn off oven and let cool in oven for 1 hour. Then cool completely.' },
      { number: 6, title: 'Add strawberries', details: 'Top with fresh strawberries or strawberry compote before serving.' }
    ]
  },
  {
    id: 11,
    name: 'Roasted Turkey',
    description: 'Classic holiday centerpiece with crispy skin and juicy meat',
    time: 240,
    image: '🦃',
    details: 'Traditional herb-roasted turkey perfect for holiday gatherings and celebrations.',
    ingredients: 'Whole turkey, butter, herbs, onions, celery, broth, salt, pepper',
    servings: 12,
    difficulty: 'Hard',
    category: 'holiday',
    isWinner: true,
    steps: [
      { number: 1, title: 'Prepare turkey', details: 'Remove giblets and pat turkey dry. Let sit at room temperature 1 hour.' },
      { number: 2, title: 'Season inside and out', details: 'Rub butter and herbs all over turkey and inside cavity.' },
      { number: 3, title: 'Set up roasting', details: 'Place turkey on roasting pan with vegetables and broth.' },
      { number: 4, title: 'Roast', details: 'Roast at 325°F for about 13 minutes per pound until golden.' },
      { number: 5, title: 'Rest the turkey', details: 'Let rest for 20-30 minutes before carving. This keeps it juicy.' },
      { number: 6, title: 'Carve and serve', details: 'Carve and serve with pan drippings and gravy.' }
    ]
  },
  {
    id: 12,
    name: 'Cranberry Sauce',
    description: 'Tangy and festive sauce perfect for holiday meals',
    time: 20,
    image: '🍓',
    details: 'Homemade cranberry sauce with a perfect balance of tartness and sweetness.',
    ingredients: 'Fresh cranberries, sugar, orange juice, cinnamon, cloves',
    servings: 8,
    difficulty: 'Easy',
    category: 'holiday',
    isWinner: true,
    steps: [
      { number: 1, title: 'Rinse cranberries', details: 'Rinse fresh cranberries and discard any damaged ones.' },
      { number: 2, title: 'Combine ingredients', details: 'Add cranberries, sugar, and orange juice to a saucepan.' },
      { number: 3, title: 'Bring to boil', details: 'Heat over medium-high heat, stirring occasionally, until it boils.' },
      { number: 4, title: 'Simmer', details: 'Reduce heat and simmer for 15 minutes until berries break down.' },
      { number: 5, title: 'Add spices', details: 'Stir in cinnamon and cloves for extra flavor.' },
      { number: 6, title: 'Cool and serve', details: 'Let cool completely. Sauce will thicken as it cools.' }
    ]
  },
  {
    id: 13,
    name: 'Homemade Pasta Carbonara',
    description: 'Creamy Italian pasta with bacon and parmesan',
    time: 30,
    image: '🍝',
    details: 'Elevated version of the classic with premium ingredients and techniques.',
    ingredients: 'Fresh pasta, guanciale, eggs, pecorino romano, black pepper',
    servings: 4,
    difficulty: 'Medium',
    steps: [
      { number: 1, title: 'Cook pasta', details: 'Bring salted water to boil and cook fresh pasta until al dente.' },
      { number: 2, title: 'Prepare sauce', details: 'Whisk eggs with grated cheese and cracked black pepper.' },
      { number: 3, title: 'Cook guanciale', details: 'Dice and cook guanciale until crispy, about 5 minutes.' },
      { number: 4, title: 'Combine hot', details: 'Toss hot pasta with guanciale and fat. Remove from heat.' },
      { number: 5, title: 'Add eggs', details: 'Quickly stir in egg mixture while pasta is hot, creating a creamy sauce.' },
      { number: 6, title: 'Serve', details: 'Plate immediately with extra cheese and black pepper.' }
    ]
  },
  {
    id: 14,
    name: 'Spicy Thai Green Curry',
    description: 'Aromatic coconut curry with vegetables and protein',
    time: 35,
    image: '🥘',
    details: 'Fragrant and creamy Thai curry with just the right amount of heat.',
    ingredients: 'Coconut milk, green curry paste, chicken, vegetables, fish sauce, lime',
    servings: 4,
    difficulty: 'Medium',
    steps: [
      { number: 1, title: 'Heat coconut milk', details: 'Heat 1 can of coconut milk in a large pot over medium heat.' },
      { number: 2, title: 'Add curry paste', details: 'Stir in green curry paste and cook for 2 minutes to bloom flavors.' },
      { number: 3, title: 'Add protein', details: 'Add sliced chicken and cook for 5-7 minutes until cooked through.' },
      { number: 4, title: 'Add vegetables', details: 'Add bamboo shoots, bell peppers, and basil. Simmer for 5 minutes.' },
      { number: 5, title: 'Season', details: 'Add fish sauce to taste and squeeze of fresh lime juice.' },
      { number: 6, title: 'Serve hot', details: 'Ladle into bowls and serve over jasmine rice.' }
    ]
  },
  {
    id: 15,
    name: 'Crispy Fried Chicken',
    description: 'Golden, juicy fried chicken with herb seasoning',
    time: 45,
    image: '🍗',
    details: 'Southern-style fried chicken with a crispy coating and tender, juicy meat.',
    ingredients: 'Chicken pieces, buttermilk, flour, paprika, garlic powder, salt, pepper, oil',
    servings: 4,
    difficulty: 'Easy',
    steps: [
      { number: 1, title: 'Marinate chicken', details: 'Soak chicken in buttermilk for at least 1 hour or overnight.' },
      { number: 2, title: 'Mix dry ingredients', details: 'Combine flour with paprika, garlic powder, salt, and pepper.' },
      { number: 3, title: 'Heat oil', details: 'Heat oil in a deep pan or fryer to 350°F (175°C).' },
      { number: 4, title: 'Coat chicken', details: 'Remove chicken from buttermilk and coat thoroughly in flour mixture.' },
      { number: 5, title: 'Fry', details: 'Fry chicken for 12-15 minutes until golden brown and cooked through.' },
      { number: 6, title: 'Drain and serve', details: 'Place on paper towels to drain. Serve hot with sides.' }
    ]
  },
  {
    id: 16,
    name: 'Sushi Rolls Assortment',
    description: 'Fresh assortment of California and spicy tuna rolls',
    time: 40,
    image: '🍣',
    details: 'Beautifully rolled sushi with fresh fish, vegetables, and perfect seasoned rice.',
    ingredients: 'Sushi rice, nori, fish, cucumber, avocado, crab, soy sauce, wasabi',
    servings: 4,
    difficulty: 'Hard',
    steps: [
      { number: 1, title: 'Cook sushi rice', details: 'Cook and season rice with vinegar, sugar, and salt. Cool completely.' },
      { number: 2, title: 'Prepare ingredients', details: 'Slice fish, cucumber, and avocado into thin strips.' },
      { number: 3, title: 'Lay nori', details: 'Place nori on bamboo mat with shiny side down.' },
      { number: 4, title: 'Add rice', details: 'Spread thin layer of rice on nori, leaving a border at the top.' },
      { number: 5, title: 'Add fillings', details: 'Layer fish, vegetables, and other ingredients in the center.' },
      { number: 6, title: 'Roll and slice', details: 'Roll tightly using the mat. Slice with a sharp, wet knife. Serve with soy sauce and wasabi.' }
    ]
  },
];

export const recipeCategories = {
  asian: 'Tasty Asian Cuisine',
  desserts: 'Sweets and Desserts',
  holiday: 'Best Christmas Dishes'
};
