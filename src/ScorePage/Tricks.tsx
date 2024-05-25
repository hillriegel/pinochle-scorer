import { PlayerId } from './types';
import { Grid, Input, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const cardPoints = {
    Aces: 11,
    Tens: 10,
    Kings: 4,
    Queens: 3,
    Jacks: 2,
    
};

interface TricksProps {
    playerId: PlayerId;
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

const Tricks: React.FC<TricksProps> = ({ playerId, handleIncrement, handleDecrement, cardCounts}) => {

    return (
        <div className="tricks">
            <h3>Tricks</h3>


            {Object.keys(cardPoints).map((cardType) => (
                <div key={cardType} style={{ margin: '10px' }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4} className="platy">{cardType}</Grid>
                        <Grid item xs={2}>
                         <Input value={cardCounts[cardType as keyof typeof cardPoints]} readOnly />
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                className="plus-button"
                                variant="outlined"
                                onClick={() => handleIncrement(cardType as keyof typeof cardPoints, playerId)}
                            >
                                <AddIcon />
                            </Button>
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
    )

}

export default Tricks;