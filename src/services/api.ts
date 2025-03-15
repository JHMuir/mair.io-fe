import {APIRequest, APIResponse} from "../types"

const API_BASE_URL = 'http://localhost:8000/api'

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
            throw new Error('API error: ${reponse.status} ${reponse.statusTest}');
        }

        return await response.json();
    } catch(error) {
        console.error('Error sending message:', error);
        throw error;
    }
}