import React, {useRef, useEffect} from 'react';
import { Message } from '../types';
import ChatMessage from './ChatMessage';

interface MessageListProps {
    messages: Message[];
    isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="message-list">
          {messages.length === 0 ? (
            <div className="empty-state">
              <p>Welcome to Mario Music Chat! Ask me anything about the music from Super Mario Bros.</p>
            </div>
          ) : (
            // Map through messages and render each one
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="loading-indicator">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          {/* Empty div for scrolling to the bottom */}
          <div ref={messagesEndRef} />
        </div>
      );
};

export default MessageList;