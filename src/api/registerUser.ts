const API_URL = 'https://alisters-hangman-d5d887d87847.herokuapp.com/api/register';
import { Register } from "../models/Register";

export const addUser = async (packet: Register): Promise<void> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(packet),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error adding score:', error);
    }
};