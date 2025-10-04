import React, { useState, useEffect } from 'react';
import { Plus, Target, Flame, TrendingUp, Heart, Star, Calendar, Award } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [calorieGoal] = useState(2000);
  const [consumedCalories, setConsumedCalories] = useState(1456);
  const [recentMeals] = useState([
    { id: 1, name: 'Strawberry Smoothie Bowl', calories: 320, time: '8:30 AM', emoji: '🍓' },
    { id: 2, name: 'Avocado Toast with Love', calories: 280, time: '12:30 PM', emoji: '🥑' },
    { id: 3, name: 'Rainbow Salad', calories: 185, time: '2:00 PM', emoji: '🥗' },
    { id: 4, name: 'Sweet Yogurt Parfait', calories: 245, time: '4:15 PM', emoji: '🍯' },
  ]);

  const [quickAddCalories, setQuickAddCalories] = useState('');
  const [motivationIndex, setMotivationIndex] = useState(0);

  const motivationalMessages = [
    "You're nourishing your beautiful soul! ✨",
    "Every healthy choice is an act of self-love 💕",
    "You're glowing from the inside out! 🌟",
    "Your body is your temple, treat it like one! 🌸",
    "Small steps lead to big transformations! 🦋",
    "You're doing amazing, beautiful! 💖"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMotivationIndex((prev) => (prev + 1) % motivationalMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [motivationalMessages.length]);

  const remainingCalories = calorieGoal - consumedCalories;
  const progressPercentage = Math.min((consumedCalories / calorieGoal) * 100, 100);

  const handleQuickAdd = () => {
    if (quickAddCalories && !isNaN(quickAddCalories)) {
      setConsumedCalories(prev => prev + parseInt(quickAddCalories));
      setQuickAddCalories('');
    }
  };

  const getProgressColor = () => {
    if (progressPercentage < 50) return 'var(--baby-pink)';
    if (progressPercentage < 80) return 'var(--primary-pink)';
    return 'var(--rose-gold)';
  };

  const getMotivationalIcon = () => {
    if (progressPercentage < 25) return '🌱';
    if (progressPercentage < 50) return '🌸';
    if (progressPercentage < 75) return '🌺';
    return '🏆';
  };

  return (
    <div className="dashboard fade-in-up">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-card card">
          <div className="welcome-content">
            <div className="welcome-text">
              <h1>Good Morning, Beautiful! ✨</h1>
              <p className="motivation-text">
                <Heart className="heart-icon pulse" size={16} />
                {motivationalMessages[motivationIndex]}
              </p>
            </div>
            <div className="welcome-icon float">
              <span className="big-emoji">{getMotivationalIcon()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid grid grid-3">
        <div className="stat-card card card-small">
          <div className="stat-icon">
            <Target className="icon-gradient" size={24} />
          </div>
          <div className="stat-content">
            <h3>Daily Goal</h3>
            <p className="stat-number">{calorieGoal.toLocaleString()}</p>
            <span className="stat-label">calories</span>
          </div>
        </div>

        <div className="stat-card card card-small">
          <div className="stat-icon">
            <Flame className="icon-gradient" size={24} />
          </div>
          <div className="stat-content">
            <h3>Consumed</h3>
            <p className="stat-number">{consumedCalories.toLocaleString()}</p>
            <span className="stat-label">calories</span>
          </div>
        </div>

        <div className="stat-card card card-small">
          <div className="stat-icon">
            <TrendingUp className="icon-gradient" size={24} />
          </div>
          <div className="stat-content">
            <h3>Remaining</h3>
            <p className={`stat-number ${remainingCalories < 0 ? 'over-goal' : ''}`}>
              {Math.abs(remainingCalories).toLocaleString()}
            </p>
            <span className="stat-label">
              {remainingCalories < 0 ? 'over goal' : 'left today'}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <div className="progress-card card">
          <div className="progress-header">
            <h2>Today's Progress</h2>
            <div className="progress-percentage">
              <Star className="star-icon" size={20} />
              {Math.round(progressPercentage)}%
            </div>
          </div>
          
          <div className="progress-visual">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${progressPercentage}%`,
                  background: `linear-gradient(90deg, ${getProgressColor()}, var(--primary-pink))`
                }}
              ></div>
            </div>
          </div>

          <div className="progress-details">
            <div className="progress-milestone">
              <span className="milestone-emoji">🌸</span>
              <span>Great start!</span>
            </div>
            <div className="progress-milestone">
              <span className="milestone-emoji">🌺</span>
              <span>Halfway there!</span>
            </div>
            <div className="progress-milestone">
              <span className="milestone-emoji">🏆</span>
              <span>Goal achieved!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-section">
        <div className="quick-actions-card card">
          <h2>Quick Add Calories</h2>
          <div className="quick-add-form">
            <input
              type="number"
              value={quickAddCalories}
              onChange={(e) => setQuickAddCalories(e.target.value)}
              placeholder="Enter calories..."
              className="form-input"
            />
            <button 
              onClick={handleQuickAdd}
              className="btn btn-primary"
              disabled={!quickAddCalories}
            >
              <Plus size={20} />
              Add Calories
            </button>
          </div>
        </div>
      </div>

      {/* Recent Meals */}
      <div className="recent-meals-section">
        <div className="meals-card card">
          <div className="meals-header">
            <h2>Today's Nourishment</h2>
            <Calendar className="calendar-icon" size={20} />
          </div>
          
          <div className="meals-list">
            {recentMeals.map(meal => (
              <div key={meal.id} className="meal-item">
                <div className="meal-emoji">{meal.emoji}</div>
                <div className="meal-details">
                  <h4 className="meal-name">{meal.name}</h4>
                  <p className="meal-time">{meal.time}</p>
                </div>
                <div className="meal-calories">
                  <span className="calories-number">{meal.calories}</span>
                  <span className="calories-label">cal</span>
                </div>
              </div>
            ))}
          </div>

          {recentMeals.length === 0 && (
            <div className="empty-state">
              <h3>No meals logged yet</h3>
              <p>Start your beautiful journey by logging your first meal! 🌸</p>
            </div>
          )}
        </div>
      </div>

      {/* Achievement Section */}
      <div className="achievement-section">
        <div className="achievement-card card card-small">
          <div className="achievement-content">
            <div className="achievement-icon">
              <Award className="award-icon pulse" size={24} />
            </div>
            <div className="achievement-text">
              <h3>You're Amazing!</h3>
              <p>5 days of consistent tracking! 🎉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;