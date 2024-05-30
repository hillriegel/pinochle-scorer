import React from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import PlayerNameForm from './PlayerNameForm';
import ScoreInput from './ScoreInput';
import {
    Grid,
    Button,
 } from '@mui/material';

 import { PlayerScoreType, PlayerId } from './types';
 import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

 interface PlayerScoreProps {
    handleNameSubmit: (name: string, playerId: PlayerId) => void;
    updateScore: (scoreClass: string, playerId: PlayerId) => void;
    playerId: PlayerId;
    showNameForm: boolean;
    setShowNameForm: React.Dispatch<React.SetStateAction<boolean>>;
    playerScores: PlayerScoreType; // Make sure this property is declared in the interface
    deleteMeldItem: (playerId: PlayerId, scoreClass: string) => void;
 }

const PlayerScore: React.FC<PlayerScoreProps> = ({ 
    playerScores, 
    handleNameSubmit, 
    updateScore, 
    playerId, 
    showNameForm, 
    setShowNameForm, 
    deleteMeldItem 
}) => {
   
    return (
        <div className="score-column">
            <Grid container spacing={1} style={{display: 'flex', alignItems: 'center'}}>
                <Grid item xs={10}>
                {!showNameForm && (
                    <h3>{playerScores.name}&apos;s Score: {playerScores.totalScore}</h3>
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
                <ScoreInput player={playerId} updateScore={updateScore} />
            </Grid>
                <div style={{textAlign: 'left', padding: '20px'}}>
                    <Accordion className="melds-accordian">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <div style={{marginLeft: '20px'}}><h3>Melds: &nbsp; &nbsp; {playerScores.meldPoints} </h3></div>
                    </AccordionSummary>
                    <AccordionDetails>
                            {playerScores.scoreList.map((scoreItem, index) => (
                            <div key={index} className="meld-item">
                                <Grid item xs={6}>{scoreItem.class}</Grid>
                                <Grid item xs={4} style={{textAlign: 'right'}}>{scoreItem.points}</Grid>
                                <Grid item xs={2}> &nbsp; &nbsp; &nbsp; &nbsp;
                                <DeleteIcon  onClick={() => deleteMeldItem(playerId, scoreItem.class)} className="delete-icon" />
                            </Grid>
                            </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>


        </div>
    );
}

export default PlayerScore;