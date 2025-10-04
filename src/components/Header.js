import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, BarChart3, User, Menu, X, Heart, Sparkles } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard', emoji: '🌸' },
    { path: '/food', icon: Search, label: 'Food Search', emoji: '🍓' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', emoji: '📊' },
    { path: '/profile', icon: User, label: 'Profile', emoji: '💕' }
  ];

  const motivationalQuotes = [
    "You're glowing today! ✨",
    "Beautiful progress, beautiful you! 💖",
    "Nourish your soul! 🌺",
    "You're doing amazing! 🌟",
    "Self-love starts here! 💗"
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <header className="header">
      <div className="header-content">
        {/* Beautiful Logo */}
        <div className="logo">
          <div className="logo-icon float">
            <Sparkles className="sparkle" />
            🌸
          </div>
          <div className="logo-text">
            <h1 className="logo-title">CalorieBlossom</h1>
            <p className="logo-subtitle">{randomQuote}</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-emoji">{item.emoji}</span>
                <Icon className="nav-icon" size={20} />
                <span className="nav-label">{item.label}</span>
                {isActive && <Heart className="nav-heart" size={12} />}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-mobile ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-emoji">{item.emoji}</span>
                <Icon className="nav-icon" size={20} />
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;