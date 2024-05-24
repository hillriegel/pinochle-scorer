import React, { useState } from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import PlayerNameForm from './PlayerNameForm';
import {
    Grid,
    Button,
 } from '@mui/material';

export default function PlayerScore({ playerName, score, handleNameSubmit, updateScore, setPlayerScores, player}) {

    const [showNameForm, setShowNameForm] = useState(false);


    return (
        <div className="score-column">
            <Grid container spacing={2} style={{display: 'flex', alignItems: 'center'}}>
                <Grid item xs={10}>
                {!showNameForm && (
                    <h3>{playerName}&apos;s Score</h3>
                )}

                {showNameForm && (
                    <PlayerNameForm handleNameSubmit={handleNameSubmit}/>
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
                    onClick={() => updateScore(player, 10)}
                    style={{width: '100%'}}
                >
                    Add 10 to {playerName}
                </Button>
                </Grid>
            </Grid>
           
            <p>{score}</p>
        </div>
    );
}
