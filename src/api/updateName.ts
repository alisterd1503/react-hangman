const API_URL = 'https://alisters-hangman-d5d887d87847.herokuapp.com/api/updateName';

type NewName = {
    id: number,
    newName: string,
}

export const updateName = async (name: NewName): Promise<void> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(name),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error adding score:', error);
    }
};