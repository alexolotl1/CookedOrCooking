// All recipes - some are marked as featured for showcase display
export const recipes = [
  {
    id: 1,
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with creamy sauce',
    time: 20,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Authentic Roman pasta dish made with eggs, cheese, and guanciale. A simple yet elegant meal.',
    ingredients: 'Pasta, eggs, pecorino romano, guanciale, black pepper',
    servings: 4,
    difficulty: 'Medium',
    isVegetarian: false,
    isVegan: false,
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
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664475934279-2631a25c42ce?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'A fast and flavorful Asian-inspired dish loaded with colorful vegetables and tender chicken.',
    ingredients: 'Chicken breast, bell peppers, broccoli, soy sauce, garlic, ginger, sesame oil',
    servings: 3,
    difficulty: 'Easy',
    isVegetarian: false,
    isVegan: false,
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
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    details: 'Soft and chewy cookies with melty chocolate chips. Perfect for snacking or dessert.',
    ingredients: 'Flour, butter, sugar, eggs, vanilla, chocolate chips, baking soda, salt',
    servings: 24,
    difficulty: 'Easy',
    isVegetarian: true,
    isVegan: false,
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
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    details: 'Classic Caesar salad with homemade dressing. Light yet satisfying.',
    ingredients: 'Romaine lettuce, parmesan, croutons, anchovy paste, garlic, lemon, olive oil',
    servings: 2,
    difficulty: 'Easy',
    isVegetarian: false,
    isVegan: false,
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
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Healthy and elegant salmon with a zesty lemon butter sauce.',
    ingredients: 'Salmon fillets, butter, lemon, garlic, salt, pepper, olive oil',
    servings: 2,
    difficulty: 'Easy',
    featured: true,
    category: 'fish',
    isVegetarian: false,
    isVegan: false,
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
    imageUrl: 'https://images.unsplash.com/photo-1665594051407-7385d281ad76?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Warm, comforting vegetable soup that\'s perfect for any season.',
    ingredients: 'Carrots, celery, onions, potatoes, tomatoes, vegetable broth, herbs',
    servings: 6,
    difficulty: 'Easy',
    isVegetarian: true,
    isVegan: true,
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
    imageUrl: 'https://images.unsplash.com/photo-1655091273851-7bdc2e578a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFkJTIwdGhhaXxlbnwwfHwwfHx8MA%3D%3D',
    details: 'Authentic Thai street food with a perfect balance of sweet, salty, sour, and spicy flavors.',
    ingredients: 'Rice noodles, shrimp, eggs, peanuts, lime, fish sauce, tamarind, garlic, chili',
    servings: 2,
    difficulty: 'Easy',
    featured: true,
    category: 'asian',
    isVegetarian: false,
    isVegan: false,
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
    name: 'Tiramisu',
    description: 'Italian layered dessert with mascarpone and espresso',
    time: 30,
    imageUrl: 'https://images.unsplash.com/photo-1724116379273-ba32b70d112c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Elegant Italian dessert with layers of mascarpone cream and coffee-soaked ladyfingers.',
    ingredients: 'Ladyfinger biscuits, mascarpone cheese, eggs, sugar, espresso, cocoa powder, marsala wine',
    servings: 8,
    difficulty: 'Medium',
    isVegetarian: true,
    isVegan: false,
    steps: [
      { number: 1, title: 'Prepare cream', details: 'Whisk egg yolks with sugar until pale. Fold in mascarpone cheese gently.' },
      { number: 2, title: 'Prepare coffee', details: 'Mix cooled espresso with marsala wine and sugar.' },
      { number: 3, title: 'Dip ladyfingers', details: 'Quickly dip each ladyfinger in coffee mixture.' },
      { number: 4, title: 'Layer', details: 'Spread mascarpone mixture, then layer dipped ladyfingers, repeat.' },
      { number: 5, title: 'Chill', details: 'Cover and refrigerate for at least 4 hours.' },
      { number: 6, title: 'Serve', details: 'Dust with cocoa powder just before serving.' }
    ]
  },
  {
    id: 9,
    name: 'Lemon Cheesecake',
    description: 'Tangy cheesecake with fresh lemon flavor',
    time: 90,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1726718415941-82a5cfb3f909?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: 'Creamy cheesecake with bright lemon zest and lemon juice for a refreshing taste.',
    ingredients: 'Cream cheese, sugar, eggs, graham cracker crust, lemon, butter, cornstarch',
    servings: 8,
    difficulty: 'Medium',
    isVegetarian: true,
    isVegan: false,
    steps: [
      { number: 1, title: 'Prepare crust', details: 'Mix crushed graham crackers with melted butter. Press into springform pan.' },
      { number: 2, title: 'Make filling', details: 'Beat cream cheese with sugar, add lemon zest, juice, and eggs.' },
      { number: 3, title: 'Pour filling', details: 'Pour filling over crust smoothly.' },
      { number: 4, title: 'Bake', details: 'Bake at 325°F for 50-55 minutes until nearly set.' },
      { number: 5, title: 'Cool slowly', details: 'Turn off oven, crack door, and cool for 1 hour. Then cool completely.' },
      { number: 6, title: 'Chill and serve', details: 'Refrigerate overnight before serving with optional lemon glaze.' }
    ]
  },
  {
    id: 10,
    name: 'Beef Rendang',
    description: 'Indonesian spiced beef in rich coconut sauce',
    time: 90,
    imageUrl: 'https://www.billyparisi.com/wp-content/uploads/2025/05/rendang-5.jpg',
    details: 'Aromatic Indonesian curry with tender beef and spices cooked in coconut milk.',
    ingredients: 'Beef, coconut milk, lemongrass, galangal, garlic, chilies, turmeric, shallots',
    servings: 4,
    difficulty: 'Medium',
    featured: true,
    category: 'asian',
    isVegetarian: false,
    isVegan: false,
    steps: [
      { number: 1, title: 'Blend paste', details: 'Blend lemongrass, galangal, garlic, chilies, and shallots into a paste.' },
      { number: 2, title: 'Sauté paste', details: 'Heat oil and cook the paste until fragrant, about 3 minutes.' },
      { number: 3, title: 'Brown beef', details: 'Add beef and cook until browned on all sides.' },
      { number: 4, title: 'Add coconut milk', details: 'Pour in coconut milk and bring to a simmer.' },
      { number: 5, title: 'Simmer', details: 'Cook on low heat for 45-60 minutes until beef is tender.' },
      { number: 6, title: 'Finish', details: 'Season with salt and turmeric. Serve with rice.' }
    ]
  },
  {
    id: 11,
    name: 'Sushi Roll Assortment',
    description: 'Variety of fresh sushi rolls with different fillings',
    time: 45,
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*lyL63cvJrs4LFzXgOeMA8A.jpeg',
    details: 'Beautiful assortment of homemade sushi rolls with fresh vegetables and proteins.',
    ingredients: 'Sushi rice, nori, cucumber, avocado, salmon, tuna, wasabi, pickled ginger',
    servings: 4,
    difficulty: 'Hard',
    featured: true,
    category: 'fish',
    isVegetarian: false,
    isVegan: false,
    steps: [
      { number: 1, title: 'Cook rice', details: 'Cook sushi rice and season with vinegar, sugar, and salt.' },
      { number: 2, title: 'Prepare ingredients', details: 'Slice cucumber, avocado, and proteins into thin strips.' },
      { number: 3, title: 'Set up mat', details: 'Place bamboo mat and nori on it.' },
      { number: 4, title: 'Add rice and fillings', details: 'Spread rice on nori and add desired fillings.' },
      { number: 5, title: 'Roll tightly', details: 'Using the mat, roll sushi tightly and seal with water.' },
      { number: 6, title: 'Slice and serve', details: 'Slice with sharp knife and serve with wasabi and pickled ginger.' }
    ]
  },
  {
    id: 12,
    name: 'Chocolate Mousse',
    description: 'Airy chocolate mousse with rich cocoa flavor',
    time: 15,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    details: 'Light and fluffy chocolate mousse perfect for any occasion.',
    ingredients: 'Dark chocolate, eggs, sugar, butter, vanilla, heavy cream, cocoa powder',
    servings: 4,
    difficulty: 'Easy',
    isVegetarian: true,
    isVegan: false,
    steps: [
      { number: 1, title: 'Melt chocolate', details: 'Melt dark chocolate in a double boiler or microwave.' },
      { number: 2, title: 'Mix with butter', details: 'Stir in butter and vanilla extract until smooth.' },
      { number: 3, title: 'Separate eggs', details: 'Separate eggs into whites and yolks.' },
      { number: 4, title: 'Combine', details: 'Add egg yolks to chocolate, whip egg whites until stiff peaks form.' },
      { number: 5, title: 'Fold together', details: 'Gently fold whipped egg whites into chocolate mixture.' },
      { number: 6, title: 'Chill and serve', details: 'Refrigerate for 30 minutes, dust with cocoa powder and serve.' }
    ]
  },
  {
    id: 13,
    name: 'Gingerbread Cookies',
    description: 'Festive spiced gingerbread cookies perfect for holidays',
    time: 45,
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gingerbread-cookies-index-6695374973548.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
    details: 'Classic Christmas gingerbread cookies with warm spices and holiday charm.',
    ingredients: 'Flour, butter, brown sugar, molasses, eggs, ginger, cinnamon, nutmeg, cloves, baking soda',
    servings: 24,
    difficulty: 'Medium',
    featured: true,
    category: 'holiday',
    isVegetarian: true,
    isVegan: false,
    steps: [
      { number: 1, title: 'Preheat oven', details: 'Preheat oven to 350°F (175°C).' },
      { number: 2, title: 'Cream butter and sugar', details: 'Mix softened butter with brown sugar until light and fluffy.' },
      { number: 3, title: 'Add molasses and egg', details: 'Beat in molasses and egg until well combined.' },
      { number: 4, title: 'Mix dry ingredients', details: 'Combine flour, baking soda, ginger, cinnamon, nutmeg, and cloves.' },
      { number: 5, title: 'Combine mixtures', details: 'Gradually add dry ingredients to wet mixture.' },
      { number: 6, title: 'Bake', details: 'Roll dough, cut into shapes, bake for 10-12 minutes until golden.' }
    ]
  },
  {
    id: 14,
    name: 'Pumpkin Pie',
    description: 'Classic autumn dessert with warm spices',
    time: 75,
    imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2023/11/easy-pumpkin-pie-20.jpg',
    details: 'Traditional pumpkin pie with cinnamon, nutmeg, and ginger - perfect for holiday gatherings.',
    ingredients: 'Pumpkin puree, pie crust, eggs, condensed milk, cinnamon, nutmeg, ginger, cloves, salt, sugar',
    servings: 8,
    difficulty: 'Medium',
    featured: true,
    category: 'holiday',
    isVegetarian: true,
    isVegan: false,
    steps: [
      { number: 1, title: 'Preheat oven', details: 'Preheat oven to 425°F (220°C).' },
      { number: 2, title: 'Prepare filling', details: 'Mix pumpkin puree, eggs, condensed milk, and spices in a bowl.' },
      { number: 3, title: 'Pour into crust', details: 'Pour filling into unbaked pie crust.' },
      { number: 4, title: 'Bake at high temp', details: 'Bake at 425°F for 15 minutes.' },
      { number: 5, title: 'Lower temp and finish', details: 'Reduce temperature to 350°F and bake for 40-50 minutes until set.' },
      { number: 6, title: 'Cool and serve', details: 'Cool completely on a rack. Serve with whipped cream.' }
    ]
  }

];

export const recipeCategories = {
  holiday: 'Best Christmas Dishes',
  asian: 'Best Asian Cuisine',
  fish: 'Best Fish Dishes'
};