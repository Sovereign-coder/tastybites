import React from 'react';
import { RecipeCategory } from '../types/recipe';
import Badge from './ui/Badge';

interface CategoryFilterProps {
  categories: RecipeCategory[];
  selectedCategories: RecipeCategory[];
  onSelectCategory: (category: RecipeCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`transition-all duration-200 ${
              selectedCategories.includes(category)
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } px-3 py-1.5 rounded-full text-sm font-medium capitalize`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;