import React from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import PlayerNameForm from './PlayerNameForm';
import ScoreInput from './ScoreInput';
import {
    Grid,
    Button,
 } from '@mui/material';

 import { PlayerScoresData, PlayerId } from './types';


interface PlayerScoreProps {
    playerName: string;
    handleNameSubmit: (name: string, playerId: PlayerId) => void;
    updateScore: (score: number, playerId: PlayerId) => void;
    totalScore: number;
    playerId: PlayerId;
    showNameForm: boolean;
    setShowNameForm: (value: boolean) => void;
    playerScores: PlayerScoresData;
};

const PlayerScore: React.FC<PlayerScoreProps> = ({ playerName, playerScores, handleNameSubmit, updateScore, playerId, showNameForm, setShowNameForm }) => {
   
   console.log("PlayerScore  playerScores = ", playerScores);
   
    return (
        <div className="score-column">
            <Grid container spacing={2} style={{display: 'flex', alignItems: 'center'}}>
                <Grid item xs={10}>
                {!showNameForm && (
                    <h3>{playerName}&apos;s Score</h3>
                )}

                {showNameForm && (
                    <PlayerNameForm handleNameSubmit={handleNameSubmit} playerId={playerId} />
                )}
               
                </Grid>

                <Grid item xs={1}>
                    <Button variant="contained" onClick={()=>setShowNameForm(!showNameForm)}><Person2Icon style={{width: '20px'}}/></Button>
                </Grid>
            </Grid>

            <Grid>
                <Grid>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => updateScore(10, playerId)}
                        style={{width: '100%'}}
                    >
                        Add 10 to {playerName}
                    </Button>
                </Grid>
                <ScoreInput player={playerId} updateScore={updateScore} />
            </Grid>
        <div style={{textAlign: 'left'}}>
            <ul>
    {playerScores[playerId].scoreList.map((scoreItem, index) => (
        <li key={index}>
            <div>{scoreItem.class}: {scoreItem.points} points</div>
        </li>
    ))}
</ul>
</div>


        </div>
    );
}

export default PlayerScore;