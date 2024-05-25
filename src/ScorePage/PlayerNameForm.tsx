import React, { useState } from 'react';
import { Input, Button } from '@mui/material';
import { PlayerId } from './types';

interface PlayerNameFormProps {
    playerId: PlayerId;
    handleNameSubmit: (name: string, playerId: PlayerId) => void;
}

const PlayerNameForm: React.FC<PlayerNameFormProps> = ({ playerId, handleNameSubmit }) => {
    const [playerName, setPlayerName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (playerName.trim()) {
            handleNameSubmit(playerName, playerId);  // Lifting the state up to the parent component
            setPlayerName('');  // Optionally clear the input field after submission
        }
    };

    return (
        <div style={{margin: '18px'}}>
        <form onSubmit={handleSubmit}>
    
            <Input
                type="text"
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter player's name"
                required
            /> &nbsp;
            <Button type="submit" variant="outlined">Set Name</Button>
        </form>
        </div>
    );
}

export default PlayerNameForm;