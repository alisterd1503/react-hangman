const API_URL = 'http://localhost:5001/api/addScore';

type Score = {
    username: string,
    score: number,
}

export const addScore = async (score: Score): Promise<void> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(score),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Score added:', data);
    } catch (error) {
        console.error('Error adding score:', error);
    }
};