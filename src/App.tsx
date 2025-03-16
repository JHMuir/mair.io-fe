import React from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import { useChat } from './hooks/useChat';
import './styles/index.css';

/**
 * Main application component
 */
const App: React.FC = () => {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  
  return (
    <div className="app-container">
      <Header onClearChat={clearChat} />
      
      <main className="chat-container">
        {/* Error Message */}
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
          </div>
        )}
        
        {/* Display all messages */}
        <MessageList 
          messages={messages} 
          isLoading={isLoading} 
        />
        
        {/* User input area */}
        <ChatInput 
          onSendMessage={sendMessage} 
          isLoading={isLoading} 
        />
      </main>
    </div>
  );
};

export default App;