export type Role = 'user' | 'assistant'

export interface Message {
    id: string;
    role: Role;
    content: string;
    timestamp: Date;
}

export interface ChatState {
    messages: Message[];
    isLoading: boolean;
    error: string | null;
}

export interface APIResponse {
    response: string;
    context?: string[];
}

export interface APIRequest {
    query: string;
}