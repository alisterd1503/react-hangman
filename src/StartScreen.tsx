import { Button, Stack, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';
import './styles.css';

const secondaryColour = "#db6e37"
const primaryColour = "#FF8343";

type StartScreenProps = {
    onStart: () => void,
    onDifficultySelect: (difficulty: string) => void,
};

export function StartScreen({ 
    onStart, 
    onDifficultySelect,
}: StartScreenProps) {

  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    onDifficultySelect(difficulty); // Call parent function to update difficulty in App
  };

    // Setting input value
    const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
        setInputValue(event.target.value);
    };

    // Sets the input value when the submit button is clicked
    const handleButtonClick = () => {
        if (inputValue.trim() === "") {
            setInputValue("");
            return;
        }
        setInputValue(inputValue);
    };

    // User can press enter to submit the input
    const handleKeyPress = (event: { key: string }) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };

  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "80vh"
    }}>
        <Typography variant="h1" style={{ marginBottom: "40px", fontFamily: "'Indie Flower', cursive", fontWeight: "bold", fontSize: "8rem" }}>
            Hangman Game
        </Typography>

        <Typography variant="h5" style={{ marginBottom: "10px", fontFamily: "'Indie Flower', cursive", fontWeight: "bold", fontSize: "3rem" }}>
            Choose Difficulty
        </Typography>

        <Stack direction="row" spacing={2} style={{ marginBottom: "60px" }}>

            <Button
                sx={{ 
                    fontFamily: "'Indie Flower', cursive", 
                    border: `solid ${secondaryColour} 2px`,
                    borderRadius: '10px', 
                    fontSize: '2rem', 
                    fontWeight: 'bold',
                    color: selectedDifficulty === 'easy' ? 'white' : secondaryColour,
                    backgroundColor: selectedDifficulty === 'easy' ? secondaryColour : 'transparent',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                }}
                variant={selectedDifficulty === 'easy' ? 'contained' : 'outlined'}
                onClick={() => handleDifficultyChange('easy')}
                >
                Easy
            </Button>

            <Button 
                sx={{ 
                    fontFamily: "'Indie Flower', cursive", 
                    border: `solid ${secondaryColour} 2px`,
                    borderRadius: '10px',
                    fontSize: '2rem',  
                    fontWeight: 'bold',
                    color: selectedDifficulty === 'medium' ? 'white' : secondaryColour,
                    backgroundColor: selectedDifficulty === 'medium' ? secondaryColour : 'transparent',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                }}
                variant={selectedDifficulty === 'medium' ? 'contained' : 'outlined'}
                onClick={() => handleDifficultyChange('medium')}
                >
                Medium
            </Button>

            <Button 
                sx={{ 
                    fontFamily: "'Indie Flower', cursive", 
                    border: `solid ${secondaryColour} 2px`,
                    borderRadius: '10px',
                    fontSize: '2rem',  
                    fontWeight: 'bold',
                    color: selectedDifficulty === 'hard' ? 'white' : secondaryColour,
                    backgroundColor: selectedDifficulty === 'hard' ? secondaryColour : 'transparent',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                }}
                variant={selectedDifficulty === 'hard' ? 'contained' : 'outlined'}
                onClick={() => handleDifficultyChange('hard')}
                >
                Hard
            </Button>

            <Button 
                sx={{ 
                    fontFamily: "'Indie Flower', cursive", 
                    border: `solid ${secondaryColour} 2px`,
                    borderRadius: '10px',
                    fontSize: '2rem',  
                    fontWeight: 'bold',
                    color: selectedDifficulty === 'random' ? 'white' : secondaryColour,
                    backgroundColor: selectedDifficulty === 'random' ? secondaryColour : 'transparent',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                }}
                variant={selectedDifficulty === 'random' ? 'contained' : 'outlined'}
                onClick={() => handleDifficultyChange('random')}
                >
                Random
            </Button>

        </Stack>

        <input
          type="text"
          id="standard-basic"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter Your Name"
          style={{
            width: '250px',
            height: '50px',
            border: 'none',
            borderBottom: '2px solid black',
            fontFamily: "'Indie Flower', cursive",
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            background: 'none',
            textAlign: 'center',
            marginBottom: '60px'
          }}
          onFocus={(event) => {
            event.target.style.outline = `none`;
            event.target.style.borderBottom = `2px solid ${primaryColour}`;
            event.target.placeholder = '';
          }}
          onBlur={(event) => {
            event.target.style.borderBottom = '2px solid black';
            event.target.placeholder = 'Enter Your Name';
          }}
        />

        <span 
            onClick={selectedDifficulty ? onStart : undefined}
            style={{
                color: "green",
                display: "inline-block",
                fontSize: "4rem",
                height: "65px",
                fontFamily: "'Indie Flower', cursive",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = 'darkgreen',
                e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = 'green',
                e.currentTarget.style.transform = 'scale(1)'
            }}
            >
            START
        </span>
        
    </div>
  );
}
