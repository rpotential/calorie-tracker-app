import React from 'react';
import { TrendingUp, Calendar, Target, Award } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="analytics fade-in-up">
      <div className="analytics-header card">
        <div className="analytics-header-content">
          <h1>Your Beautiful Progress ✨</h1>
          <p>Watch your wellness journey bloom! 🌸</p>
        </div>
        <div className="analytics-icon float">
          <span className="big-emoji">📊</span>
        </div>
      </div>

      <div className="analytics-grid grid grid-2">
        <div className="analytics-card card">
          <div className="card-header">
            <TrendingUp className="card-icon" size={24} />
            <h2>Weekly Trends</h2>
          </div>
          <div className="coming-soon">
            <p>Beautiful charts coming soon! 💖</p>
          </div>
        </div>

        <div className="analytics-card card">
          <div className="card-header">
            <Calendar className="card-icon" size={24} />
            <h2>Monthly Overview</h2>
          </div>
          <div className="coming-soon">
            <p>Monthly insights coming soon! ✨</p>
          </div>
        </div>

        <div className="analytics-card card">
          <div className="card-header">
            <Target className="card-icon" size={24} />
            <h2>Goal Progress</h2>
          </div>
          <div className="coming-soon">
            <p>Progress tracking coming soon! 🌟</p>
          </div>
        </div>

        <div className="analytics-card card">
          <div className="card-header">
            <Award className="card-icon" size={24} />
            <h2>Achievements</h2>
          </div>
          <div className="coming-soon">
            <p>Achievement system coming soon! 🏆</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;