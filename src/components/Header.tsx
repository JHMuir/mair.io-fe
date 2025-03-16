import React from 'react';

interface HeaderProps {
  onClearChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClearChat }) => {
  return (
    <header className="app-header">
      <div className="app-title">
        <span className="app-icon">🎵</span>
        <h1>Mario Music Chat</h1>
      </div>
      <div className="header-controls">
        <button 
          className="clear-button" 
          onClick={onClearChat}
          title="Clear conversation"
        >
          New Chat
        </button>
      </div>
    </header>
  );
};

export default Header;