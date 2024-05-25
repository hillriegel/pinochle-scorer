import { PlayerId } from './types';
import { Grid, Input, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
interface TricksProps {
    playerId: PlayerId;
}

const Tricks: React.FC<TricksProps> = ({ playerId }) => {

    return (
        <div className="tricks">
            <h3>Tricks</h3>
        <div style={{margin: '10px'}}>
            <Grid container spacing={2}>
                <Grid item xs={4} className="platy">Aces</Grid>
                <Grid item xs={3}><Input /></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><AddIcon /></Button></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><RemoveIcon /></Button></Grid>
            </Grid>
        </div>
        <div style={{margin: '10px'}}>
            <Grid container spacing={2}>
            <Grid item xs={4} className="platy">Tens</Grid>
                <Grid item xs={3}><Input /></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><AddIcon /></Button></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><RemoveIcon /></Button></Grid>
            </Grid>
            </div>
            <div style={{margin: '10px'}}>
            <Grid container spacing={2}>
            <Grid item xs={4} className="platy">Kings</Grid>
                <Grid item xs={3}><Input /></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><AddIcon /></Button></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><RemoveIcon /></Button></Grid>
            </Grid>
            </div>
            <div style={{margin: '10px'}}>
            <Grid container spacing={2}>
            <Grid item xs={4} className="platy">Queens</Grid>
                <Grid item xs={3}><Input /></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><AddIcon /></Button></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><RemoveIcon /></Button></Grid>
            </Grid>
            </div>
            <div style={{margin: '10px'}}>
            <Grid container spacing={2}>
                <Grid item xs={4} className="platy">Jacks</Grid>
                <Grid item xs={3}><Input /></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><AddIcon /></Button></Grid>
                <Grid item xs={2}><Button className="plus-button" variant="outlined"><RemoveIcon/></Button></Grid>
            </Grid>
            </div>
        </div>
    )

}

export default Tricks;