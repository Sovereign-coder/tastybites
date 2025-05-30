import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import RecipeDetail from './components/RecipeDetail';
import { recipes } from './data/recipes';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onSearch={handleSearch} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage recipes={recipes} />} />
            <Route path="/categories" element={<CategoriesPage recipes={recipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;