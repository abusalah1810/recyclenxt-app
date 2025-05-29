import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <div className="bottom-nav">
      <Link to="/" className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
        <div className="nav-icon">🏠</div>
        <div>Home</div>
      </Link>
      <Link to="/donate" className={`nav-item ${activeTab === 'donate' ? 'active' : ''}`} onClick={() => setActiveTab('donate')}>
        <div className="nav-icon">♻️</div>
        <div>Donate</div>
      </Link>
      <Link to="/wallet" className={`nav-item ${activeTab === 'wallet' ? 'active' : ''}`} onClick={() => setActiveTab('wallet')}>
        <div className="nav-icon">💰</div>
        <div>Wallet</div>
      </Link>
      <Link to="/profile" className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
        <div className="nav-icon">👤</div>
        <div>Profile</div>
      </Link>
    </div>
  );
};

export default Navigation;
