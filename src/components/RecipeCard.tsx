import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Recipe } from '../types/recipe';
import Badge from './ui/Badge';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          {recipe.isFeatured && (
            <div className="absolute top-0 right-0 bg-amber-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors duration-300">
              {recipe.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {recipe.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {recipe.categories.slice(0, 3).map((category, index) => (
              <Badge key={index} variant="default">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-between text-gray-500 text-sm mt-auto">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{recipe.prepTime + recipe.cookTime} min</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;