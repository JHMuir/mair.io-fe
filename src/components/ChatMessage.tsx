import React from "react";
import { Message} from "../types";

interface ChatMessageProps {
    message: Message
}

const ChatMessage: React.FC<ChatMessageProps> = ({message}) => {
    const {role, content} = message;

    const messageClass = role === 'user' ? 'user-message' : 'assistant-message';

    return (
        <div className={`message-container ${messageClass}`}>
            <div className="message-avatar">
                {role === 'user'}
            </div>
            <div className="message-bubble">
                <div className="message-content">
                    {content}
                </div>
                <div className="message-timestamp">
                    {message.timestamp.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;