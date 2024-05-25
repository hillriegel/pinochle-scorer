import React from 'react';
import { PlayerId, PlayerScoreType } from './types';
import { Grid, Input, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

const cardPoints = {
    Aces: 11,
    Kings: 4,
    Queens: 3,
    Jacks: 2,
    Tens: 10,
};

interface TricksProps {
    playerId: PlayerId;
    playerScores: PlayerScoreType;
    handleIncrement: (cardType: keyof typeof cardPoints, playerId: PlayerId) => void;
    handleDecrement: (cardType: keyof typeof cardPoints, playerId: PlayerId) => void;
    cardCounts: {
        Aces: number;
        Tens: number;
        Kings: number;
        Queens: number;
        Jacks: number;
    };
}

const Tricks: React.FC<TricksProps> = ({ playerId, handleIncrement, handleDecrement, cardCounts, playerScores }) => {
    return (
        <div className="tricks">
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <h3>Tricks</h3>
                </Grid>
                <Grid item xs={5}>
                    Points: {playerScores.trickPoints}
                </Grid>
            </Grid>
            {Object.keys(cardPoints).map((cardType) => (
                <div key={cardType} style={{ margin: '10px' }}>
                    <Grid container spacing={2} alignItems="center">
                        
                        <Grid item xs={4} className="platy">
                        <Button
                                className="plus-button"
                                variant="outlined"
                                onClick={() => handleIncrement(cardType as keyof typeof cardPoints, playerId)}
                                style={{width: '80px', fontWeight: 'bold'}}
                            >{cardType}
                            </Button>
                            </Grid>
                        <Grid item xs={2}>
                            <Input inputProps={{ style: { fontSize: '1.5em', textAlign: 'center', color: "#ffffff" } }} value={cardCounts[cardType as keyof typeof cardPoints]} readOnly />
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                className="plus-button"
                                variant="outlined"
                                onClick={() => handleDecrement(cardType as keyof typeof cardPoints, playerId)}
                            >
                                <RemoveIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            ))}
        </div>
    );
};

export default Tricks;
