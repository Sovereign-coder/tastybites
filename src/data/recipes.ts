import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Garlic Parmesan Pasta",
    description: "A rich and creamy pasta dish loaded with garlic and parmesan cheese, perfect for a comforting dinner.",
    image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: "easy",
    categories: ["dinner", "italian", "quick"],
    ingredients: [
      { name: "Fettuccine pasta", amount: "12", unit: "oz" },
      { name: "Butter", amount: "4", unit: "tbsp" },
      { name: "Garlic", amount: "4", unit: "cloves" },
      { name: "Heavy cream", amount: "1", unit: "cup" },
      { name: "Parmesan cheese", amount: "1", unit: "cup" },
      { name: "Salt", amount: "1", unit: "tsp" },
      { name: "Black pepper", amount: "1/2", unit: "tsp" },
      { name: "Fresh parsley", amount: "2", unit: "tbsp" }
    ],
    instructions: [
      "Cook pasta according to package instructions until al dente.",
      "In a large skillet, melt butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.",
      "Pour in heavy cream and bring to a simmer. Cook for 5 minutes until slightly thickened.",
      "Stir in grated parmesan cheese until melted and smooth.",
      "Season with salt and pepper to taste.",
      "Add cooked pasta to the sauce and toss until well coated.",
      "Garnish with chopped parsley and serve immediately."
    ],
    isFeatured: true
  },
  {
    id: "2",
    title: "Avocado Toast with Poached Egg",
    description: "A nutritious breakfast classic that combines creamy avocado with perfectly poached eggs on toasted bread.",
    image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: "easy",
    categories: ["breakfast", "healthy", "quick", "vegetarian"],
    ingredients: [
      { name: "Whole grain bread", amount: "2", unit: "slices" },
      { name: "Ripe avocado", amount: "1", unit: "" },
      { name: "Eggs", amount: "2", unit: "" },
      { name: "White vinegar", amount: "1", unit: "tbsp" },
      { name: "Red pepper flakes", amount: "1/4", unit: "tsp" },
      { name: "Salt", amount: "1/4", unit: "tsp" },
      { name: "Black pepper", amount: "1/4", unit: "tsp" },
      { name: "Fresh lime juice", amount: "1", unit: "tsp" }
    ],
    instructions: [
      "Toast bread slices until golden brown.",
      "Cut avocado in half, remove pit, and scoop flesh into a bowl.",
      "Mash avocado with a fork and add lime juice, salt, and pepper.",
      "Bring a pot of water to a simmer and add vinegar.",
      "Crack eggs into small cups and gently slide them into the simmering water.",
      "Poach eggs for 3-4 minutes until whites are set but yolks are still runny.",
      "Spread mashed avocado on toast slices.",
      "Top each slice with a poached egg, sprinkle with red pepper flakes, and serve."
    ],
    isFeatured: true
  },
  {
    id: "3",
    title: "Thai Green Curry with Vegetables",
    description: "A fragrant and spicy Thai curry loaded with fresh vegetables and coconut milk.",
    image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "medium",
    categories: ["dinner", "asian", "vegetarian"],
    ingredients: [
      { name: "Green curry paste", amount: "3", unit: "tbsp" },
      { name: "Coconut milk", amount: "2", unit: "cans" },
      { name: "Vegetable broth", amount: "1", unit: "cup" },
      { name: "Bell peppers", amount: "2", unit: "" },
      { name: "Broccoli", amount: "2", unit: "cups" },
      { name: "Carrots", amount: "2", unit: "" },
      { name: "Snow peas", amount: "1", unit: "cup" },
      { name: "Thai basil leaves", amount: "1/4", unit: "cup" },
      { name: "Brown sugar", amount: "1", unit: "tbsp" },
      { name: "Soy sauce", amount: "2", unit: "tbsp" },
      { name: "Lime juice", amount: "2", unit: "tbsp" }
    ],
    instructions: [
      "In a large pot, heat 2 tbsp of coconut milk over medium heat until it begins to simmer.",
      "Add green curry paste and stir for 1-2 minutes until fragrant.",
      "Pour in remaining coconut milk and vegetable broth, then bring to a simmer.",
      "Add chopped bell peppers, sliced carrots, and broccoli florets. Cook for 10 minutes.",
      "Add snow peas and cook for another 5 minutes until all vegetables are tender-crisp.",
      "Stir in brown sugar, soy sauce, and lime juice.",
      "Remove from heat and fold in Thai basil leaves.",
      "Serve hot with steamed jasmine rice."
    ]
  },
  {
    id: "4",
    title: "Classic Chocolate Chip Cookies",
    description: "Soft and chewy chocolate chip cookies with crisp edges and melty chocolate centers.",
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: "easy",
    categories: ["dessert"],
    ingredients: [
      { name: "All-purpose flour", amount: "2 1/4", unit: "cups" },
      { name: "Baking soda", amount: "1", unit: "tsp" },
      { name: "Salt", amount: "1", unit: "tsp" },
      { name: "Unsalted butter", amount: "1", unit: "cup" },
      { name: "Brown sugar", amount: "3/4", unit: "cup" },
      { name: "Granulated sugar", amount: "3/4", unit: "cup" },
      { name: "Vanilla extract", amount: "1", unit: "tsp" },
      { name: "Eggs", amount: "2", unit: "" },
      { name: "Semi-sweet chocolate chips", amount: "2", unit: "cups" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and line baking sheets with parchment paper.",
      "In a medium bowl, whisk together flour, baking soda, and salt.",
      "In a large bowl, beat butter, brown sugar, and granulated sugar until creamy.",
      "Add eggs one at a time, then vanilla, beating well after each addition.",
      "Gradually add flour mixture to butter mixture, mixing until just combined.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart.",
      "Bake for 9-12 minutes until edges are golden but centers are still soft.",
      "Cool on baking sheets for 2 minutes, then transfer to wire racks to cool completely."
    ],
    isFeatured: true
  },
  {
    id: "5",
    title: "Mediterranean Quinoa Salad",
    description: "A refreshing and nutritious salad packed with Mediterranean flavors and protein-rich quinoa.",
    image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    prepTime: 15,
    cookTime: 15,
    servings: 6,
    difficulty: "easy",
    categories: ["lunch", "healthy", "vegetarian", "vegan"],
    ingredients: [
      { name: "Quinoa", amount: "1", unit: "cup" },
      { name: "Vegetable broth", amount: "2", unit: "cups" },
      { name: "Cucumber", amount: "1", unit: "" },
      { name: "Cherry tomatoes", amount: "1", unit: "pint" },
      { name: "Red bell pepper", amount: "1", unit: "" },
      { name: "Red onion", amount: "1/2", unit: "" },
      { name: "Kalamata olives", amount: "1/2", unit: "cup" },
      { name: "Feta cheese", amount: "1/2", unit: "cup" },
      { name: "Fresh parsley", amount: "1/4", unit: "cup" },
      { name: "Olive oil", amount: "1/4", unit: "cup" },
      { name: "Lemon juice", amount: "3", unit: "tbsp" },
      { name: "Garlic", amount: "2", unit: "cloves" },
      { name: "Dried oregano", amount: "1", unit: "tsp" },
      { name: "Salt", amount: "1/2", unit: "tsp" },
      { name: "Black pepper", amount: "1/4", unit: "tsp" }
    ],
    instructions: [
      "Rinse quinoa thoroughly under cold water.",
      "In a medium saucepan, bring vegetable broth to a boil. Add quinoa, reduce heat, cover, and simmer for 15 minutes until liquid is absorbed.",
      "Remove from heat and let stand for 5 minutes, then fluff with a fork and cool completely.",
      "While quinoa is cooling, dice cucumber, halve cherry tomatoes, dice bell pepper, and thinly slice red onion.",
      "In a large bowl, combine cooled quinoa with prepared vegetables, olives, and crumbled feta cheese.",
      "In a small bowl, whisk together olive oil, lemon juice, minced garlic, oregano, salt, and pepper.",
      "Pour dressing over salad and toss to combine.",
      "Garnish with chopped fresh parsley and serve chilled."
    ]
  }
];