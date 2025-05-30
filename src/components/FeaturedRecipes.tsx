import React from 'react';
import { Recipe } from '../types/recipe';
import RecipeCard from './RecipeCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

const FeaturedRecipes: React.FC<FeaturedRecipesProps> = ({ recipes }) => {
  const featuredRecipes = recipes.filter(recipe => recipe.isFeatured).slice(0, 3);

  if (featuredRecipes.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Recipes
          </h2>
          <Link 
            to="/categories" 
            className="text-amber-600 hover:text-amber-700 font-medium flex items-center transition-colors"
          >
            View all
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;