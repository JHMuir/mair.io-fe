import {APIRequest, APIResponse} from "../types"

const API_BASE_URL = 'http://127.0.0.1:8000'

export async function sendMessage(query: string): Promise<APIResponse> {
    try {
        const request: APIRequest = {query};

        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch(error) {
        console.error('Error sending message:', error);
        throw error;
    }
}