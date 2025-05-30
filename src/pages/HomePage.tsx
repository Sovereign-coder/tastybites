import React, { useState } from 'react';
import Hero from '../components/Hero';
import FeaturedRecipes from '../components/FeaturedRecipes';
import RecipeGrid from '../components/RecipeGrid';
import { Recipe, RecipeCategory } from '../types/recipe';
import CategoryFilter from '../components/CategoryFilter';

interface HomePageProps {
  recipes: Recipe[];
}

const HomePage: React.FC<HomePageProps> = ({ recipes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<RecipeCategory[]>([]);

  const allCategories: RecipeCategory[] = [
    'breakfast', 'lunch', 'dinner', 'dessert', 
    'vegetarian', 'vegan', 'italian', 'mexican', 
    'asian', 'quick', 'healthy'
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Scroll to recipes section when search is performed
    const recipesSection = document.getElementById('recipes-section');
    if (recipesSection) {
      recipesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: RecipeCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchQuery === '' || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategories = selectedCategories.length === 0 || 
      selectedCategories.some(category => recipe.categories.includes(category));
    
    return matchesSearch && matchesCategories;
  });

  return (
    <>
      <Hero onSearch={handleSearch} />
      
      <div className="bg-gray-100">
        <FeaturedRecipes recipes={recipes} />
        
        <section id="recipes-section" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Recipes'}
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <CategoryFilter 
                    categories={allCategories}
                    selectedCategories={selectedCategories}
                    onSelectCategory={handleCategorySelect}
                  />
                </div>
              </div>
              
              <div className="lg:w-3/4">
                <RecipeGrid recipes={filteredRecipes} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;