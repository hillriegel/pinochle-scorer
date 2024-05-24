import React, { useState } from 'react';
import PlayerScore from './PlayerScore';
import { Grid, Button } from '@mui/material';

function ScorePage() {
    const [playerScores, setPlayerScores] = useState({
        player1: { name: "Alice", score: 0 },
        player2: { name: "Bob", score: 0 }
    });

    const handleNameSubmit = (name, playerId) => {
        setPlayerScores(prevScores => ({
            ...prevScores,
            [playerId]: { ...prevScores[playerId], name: name }
        }));
    };

    const updateScore = (playerId, points) => {
        setPlayerScores(prevScores => ({
            ...prevScores,
            [playerId]: { ...prevScores[playerId], score: prevScores[playerId].score + points }
        }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <PlayerScore 
                    playerName={playerScores.player1.name} 
                    score={playerScores.player1.score} 
                    handleNameSubmit={handleNameSubmit}
                    updateScore={updateScore}
                    setPlayerScores={setPlayerScores}
                    player={'player1'}
                />

            </Grid>
            <Grid item xs={6}>
                <PlayerScore 
                    playerName={playerScores.player2.name} 
                    score={playerScores.player2.score} 
                    handleNameSubmit={handleNameSubmit}
                    updateScore={updateScore}
                    setPlayerScores={setPlayerScores}
                    player={'player2'}
                />
            </Grid>
        </Grid>
    );
}

export default ScorePage;
