import React from 'react';
import { User, Settings, Heart, Crown } from 'lucide-react';

const Profile = () => {
  return (
    <div className="profile fade-in-up">
      <div className="profile-header card">
        <div className="profile-header-content">
          <h1>Your Beautiful Profile 👑</h1>
          <p>You're absolutely amazing! Keep shining! ✨</p>
        </div>
        <div className="profile-icon float">
          <span className="big-emoji">💕</span>
        </div>
      </div>

      <div className="profile-grid grid grid-2">
        <div className="profile-card card">
          <div className="card-header">
            <User className="card-icon" size={24} />
            <h2>Personal Info</h2>
          </div>
          <div className="coming-soon">
            <p>Profile settings coming soon! 🌸</p>
          </div>
        </div>

        <div className="profile-card card">
          <div className="card-header">
            <Settings className="card-icon" size={24} />
            <h2>Preferences</h2>
          </div>
          <div className="coming-soon">
            <p>Customization options coming soon! 💖</p>
          </div>
        </div>

        <div className="profile-card card">
          <div className="card-header">
            <Heart className="card-icon" size={24} />
            <h2>Favorites</h2>
          </div>
          <div className="coming-soon">
            <p>Favorite foods coming soon! 🍓</p>
          </div>
        </div>

        <div className="profile-card card">
          <div className="card-header">
            <Crown className="card-icon" size={24} />
            <h2>Achievements</h2>
          </div>
          <div className="coming-soon">
            <p>Your crown collection coming soon! 👑</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;