import React, { useState } from 'react';
import { Recipe, RecipeCategory } from '../types/recipe';
import RecipeGrid from '../components/RecipeGrid';

interface CategoriesPageProps {
  recipes: Recipe[];
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ recipes }) => {
  const [activeCategory, setActiveCategory] = useState<RecipeCategory | 'all'>('all');

  const categories: { id: RecipeCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Recipes' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'dessert', label: 'Dessert' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'italian', label: 'Italian' },
    { id: 'mexican', label: 'Mexican' },
    { id: 'asian', label: 'Asian' },
    { id: 'quick', label: 'Quick & Easy' },
    { id: 'healthy', label: 'Healthy' },
  ];

  const filteredRecipes = activeCategory === 'all'
    ? recipes
    : recipes.filter(recipe => recipe.categories.includes(activeCategory));

  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Recipe Categories</h1>
        
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 pb-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white font-medium'
                    : 'bg-white hover:bg-gray-100 text-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <RecipeGrid 
            recipes={filteredRecipes} 
            title={categories.find(c => c.id === activeCategory)?.label} 
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;