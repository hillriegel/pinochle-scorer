import React, { useState } from 'react';
import PlayerScore from './PlayerScore';  // Ensure this is the correct import
import { Grid } from '@mui/material';
import { PlayerScoresData, PlayerId} from './types';


function ScorePage() {

    const [playerScores, setPlayerScores] = useState<PlayerScoresData>({
        player1: { name: "Paula", totalScore: 0, scoreList: [{class: 'start', points: 0}]},
        player2: { name: "Joy", totalScore: 0, scoreList: [{class: 'start', points: 0}] }
    });

    const [showNameForm, setShowNameForm] = useState(false);

    const handleNameSubmit = (name: string, playerId: PlayerId) => {
        setShowNameForm(false);
        setPlayerScores(prevScores => ({
            ...prevScores,
            [playerId]: { ...prevScores[playerId], name: name }
        }));
    };

    const updateScore = (points: number, playerId: PlayerId) => {
        setPlayerScores(prevScores => ({
            ...prevScores,
            [playerId]: { ...prevScores[playerId], totalScore: prevScores[playerId].totalScore + points }
        }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <PlayerScore 
                    playerName={playerScores.player1.name} 
                    totalScore={playerScores.player1.totalScore}
                    handleNameSubmit={handleNameSubmit}
                    updateScore={updateScore}
                    playerId={'player1'}
                    showNameForm={showNameForm}
                    setShowNameForm={setShowNameForm}
                    playerScores={playerScores}
                />
            </Grid>
            <Grid item xs={12}  sm={6}>
                <PlayerScore 
                    playerName={playerScores.player2.name} 
                    totalScore={playerScores.player2.totalScore}
                    handleNameSubmit={handleNameSubmit}
                    updateScore={updateScore}
                    playerId={'player2'}
                    showNameForm={showNameForm}
                    setShowNameForm={setShowNameForm}
                    playerScores={playerScores}
                />
            </Grid>
        </Grid>
    );
}

export default ScorePage;
