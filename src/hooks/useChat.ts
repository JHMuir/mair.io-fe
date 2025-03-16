import {useState, useCallback} from 'react';
import {Message, ChatState} from '../types';
import { sendMessage } from '../services/api';
import {v4 as uuidv4} from 'uuid';

// Chat state manager

export function useChat() {
    // Initialization
    const [chatState, setChatState] = useState<ChatState>({
        messages: [],
        isLoading: false,
        error: null
    });

    const sendUserMessage = useCallback(async (content: string) => {
        if(!content.trim()) return;

        try{
            // Create a new Message object for user
            const userMessage: Message = {
                id: uuidv4(),
                role: 'user',
                content: content,
                timestamp: new Date()
            };
            // Adding user message to the state
            setChatState(prevState => ({
                ...prevState,
                messages: [...prevState.messages, userMessage],
                isLoading: true,
                error: null
            }));

            const result = await sendMessage(content)
            // Create a new Message object for assistant
            const assistantMessage: Message = {
                id: uuidv4(),
                role: 'assistant',
                content: result.response,
                timestamp: new Date()
            };
            // Adding assistant message to the state
            setChatState(prevState => ({
                ...prevState,
                messages: [...prevState.messages, assistantMessage],
                isLoading: true,
            }));
        } catch(error) {
            setChatState(prevState => ({
                ...prevState,
                isLoading: false,
                error: error instanceof Error ? error.message : 'An unknown error occurred'
            }));
        }
    }, []);

    const clearChat = useCallback(() => {
        setChatState({
          messages: [],
          isLoading: false,
          error: null
        });
    }, []);
    
    return {
        messages: chatState.messages,
        isLoading: chatState.isLoading,
        error: chatState.error,
        sendMessage: sendUserMessage,
        clearChat
    };
}