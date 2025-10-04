import React, { useState } from 'react';
import { Search, Plus, Heart, Star, Utensils, Coffee, Apple, Cake } from 'lucide-react';
import './FoodSearch.css';

const FoodSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchResults, setSearchResults] = useState([]);

  // Mock food database with beautiful, girly food items
  const foodDatabase = [
    { id: 1, name: 'Strawberry Smoothie Bowl', calories: 320, emoji: '🍓', category: 'breakfast', protein: 12, carbs: 45, fat: 8 },
    { id: 2, name: 'Avocado Toast with Love', calories: 280, emoji: '🥑', category: 'breakfast', protein: 8, carbs: 25, fat: 18 },
    { id: 3, name: 'Butterfly Pea Latte', calories: 150, emoji: '🦋', category: 'drinks', protein: 6, carbs: 20, fat: 5 },
    { id: 4, name: 'Rainbow Quinoa Salad', calories: 185, emoji: '🌈', category: 'lunch', protein: 8, carbs: 28, fat: 6 },
    { id: 5, name: 'Rose Petal Macarons', calories: 95, emoji: '🌹', category: 'dessert', protein: 2, carbs: 15, fat: 3 },
    { id: 6, name: 'Golden Turmeric Latte', calories: 180, emoji: '✨', category: 'drinks', protein: 4, carbs: 22, fat: 8 },
    { id: 7, name: 'Lavender Honey Yogurt', calories: 145, emoji: '💜', category: 'snack', protein: 10, carbs: 18, fat: 4 },
    { id: 8, name: 'Cherry Blossom Cake', calories: 275, emoji: '🌸', category: 'dessert', protein: 4, carbs: 42, fat: 11 },
    { id: 9, name: 'Matcha Green Tea', calories: 25, emoji: '🍵', category: 'drinks', protein: 1, carbs: 4, fat: 0 },
    { id: 10, name: 'Pink Dragon Fruit Bowl', calories: 210, emoji: '🐲', category: 'breakfast', protein: 5, carbs: 38, fat: 6 },
    { id: 11, name: 'Unicorn Smoothie', calories: 195, emoji: '🦄', category: 'drinks', protein: 8, carbs: 32, fat: 4 },
    { id: 12, name: 'Goddess Grain Bowl', calories: 340, emoji: '👑', category: 'lunch', protein: 15, carbs: 45, fat: 12 }
  ];

  const categories = [
    { id: 'all', name: 'All Foods', emoji: '🌈', icon: Utensils },
    { id: 'breakfast', name: 'Breakfast', emoji: '☀️', icon: Coffee },
    { id: 'lunch', name: 'Lunch', emoji: '🥗', icon: Apple },
    { id: 'dinner', name: 'Dinner', emoji: '🍽️', icon: Utensils },
    { id: 'snack', name: 'Snacks', emoji: '🍇', icon: Apple },
    { id: 'drinks', name: 'Drinks', emoji: '🧋', icon: Coffee },
    { id: 'dessert', name: 'Desserts', emoji: '🍰', icon: Cake }
  ];

  const motivationalSearchTips = [
    "Search for foods that make your soul sparkle! ✨",
    "Find nourishing treats that love you back! 💕",
    "Discover delicious foods that fuel your glow! 🌟",
    "Let's find foods as beautiful as you are! 🌸"
  ];

  const getRandomTip = () => {
    return motivationalSearchTips[Math.floor(Math.random() * motivationalSearchTips.length)];
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults(selectedCategory === 'all' ? foodDatabase : foodDatabase.filter(food => food.category === selectedCategory));
      return;
    }

    const filtered = foodDatabase.filter(food => {
      const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    setSearchResults(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Auto-search when category changes
    setTimeout(() => {
      const filtered = category === 'all' ? foodDatabase : foodDatabase.filter(food => food.category === category);
      if (searchQuery.trim()) {
        setSearchResults(filtered.filter(food => food.name.toLowerCase().includes(searchQuery.toLowerCase())));
      } else {
        setSearchResults(filtered);
      }
    }, 100);
  };

  const handleAddFood = (food) => {
    // In a real app, this would add to the user's daily log
    console.log('Added food:', food);
    // You could show a toast notification here
  };

  // Initialize with some results
  React.useEffect(() => {
    setSearchResults(foodDatabase.slice(0, 6));
  }, []);

  return (
    <div className="food-search fade-in-up">
      {/* Header Section */}
      <div className="search-header">
        <div className="search-header-card card">
          <div className="search-header-content">
            <h1>Find Your Perfect Foods ✨</h1>
            <p className="search-subtitle">{getRandomTip()}</p>
          </div>
          <div className="search-header-icon float">
            <span className="big-emoji">🔍</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar-section">
        <div className="search-bar-card card">
          <div className="search-form">
            <div className="search-input-group">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search for delicious foods..."
                className="form-input search-input"
              />
              <button 
                onClick={handleSearch}
                className="btn btn-primary search-btn"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="categories-section">
        <div className="categories-card card">
          <h2>Choose Your Mood</h2>
          <div className="categories-grid">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <span className="category-emoji">{category.emoji}</span>
                  <Icon className="category-icon" size={20} />
                  <span className="category-label">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="results-section">
        <div className="results-header">
          <h2>Beautiful Food Options</h2>
          <Heart className="heart-icon pulse" size={20} />
        </div>

        {searchResults.length === 0 ? (
          <div className="empty-results card">
            <div className="empty-state">
              <span className="empty-emoji">🌸</span>
              <h3>No foods found</h3>
              <p>Try searching for something else, beautiful! ✨</p>
            </div>
          </div>
        ) : (
          <div className="results-grid grid grid-2">
            {searchResults.map(food => (
              <div key={food.id} className="food-card card card-small">
                <div className="food-header">
                  <span className="food-emoji">{food.emoji}</span>
                  <div className="food-favorite">
                    <Star className="star-icon" size={16} />
                  </div>
                </div>
                
                <div className="food-content">
                  <h3 className="food-name">{food.name}</h3>
                  
                  <div className="food-stats">
                    <div className="food-calories">
                      <span className="calories-number">{food.calories}</span>
                      <span className="calories-label">calories</span>
                    </div>
                    
                    <div className="food-macros">
                      <span className="macro">P: {food.protein}g</span>
                      <span className="macro">C: {food.carbs}g</span>
                      <span className="macro">F: {food.fat}g</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleAddFood(food)}
                  className="btn btn-primary food-add-btn"
                >
                  <Plus size={16} />
                  Add to Day
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodSearch;