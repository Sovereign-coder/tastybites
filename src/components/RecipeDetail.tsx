import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';
import { Recipe } from '../types/recipe';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface RecipeDetailProps {
  recipes: Recipe[];
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipes }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.id === id);
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recipe not found</h2>
          <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-12">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-amber-600 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to recipes
      </button>
      
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-[400px] md:h-[500px]">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 md:p-8 w-full">
              <div className="flex flex-wrap gap-2 mb-3">
                {recipe.categories.map((category, index) => (
                  <Badge key={index} variant="default">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {recipe.title}
              </h1>
              <p className="text-gray-200 text-lg mb-4">
                {recipe.description}
              </p>
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-300">Total Time</p>
                    <p className="font-medium">{recipe.prepTime + recipe.cookTime} min</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-300">Servings</p>
                    <p className="font-medium">{recipe.servings}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ChefHat className="h-5 w-5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-300">Difficulty</p>
                    <p className="font-medium capitalize">{recipe.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recipe Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-baseline">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mr-3 mt-1.5 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    <span className="font-medium">{ingredient.amount} {ingredient.unit} </span>
                    {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Instructions
            </h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700">{instruction}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;