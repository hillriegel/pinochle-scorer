import React, { useState } from 'react';
import { Input, Button } from '@mui/material';

export default function PlayerNameForm({ onNameSubmit }) {
    const [playerName, setPlayerName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (playerName.trim()) {
            onNameSubmit(playerName);  // Lifting the state up to the parent component
            setPlayerName('');  // Optionally clear the input field after submission
        }
    };

    return (
        <div style={{margin: '18px'}}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="playerName">Player Name: </label>
            <Input
                type="text"
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter player's name"
                required
            />
            <Button type="submit">Set Name</Button>
        </form>
        </div>
    );
}
