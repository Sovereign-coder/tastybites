import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">TastyBites</h3>
            <p className="text-gray-300 mb-4">
              Discover delicious recipes from around the world and elevate your culinary skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Recipes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Popular</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Recent</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Cooking Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Techniques</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Ingredients</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Kitchen Hacks</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} TastyBites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;