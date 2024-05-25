import React, { useState } from 'react';
import { Grid, Box, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { PlayerId } from './types';

interface ScoreInputProps {
    updateScore: (scoreClass: string, playerId: PlayerId) => void;
    player: PlayerId; 
}

const ScoreInput: React.FC<ScoreInputProps> = ({ updateScore, player }) => {
    const [add, setAdd] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const scoringOptions = [
        { label: 'Exchange Dix (10)', value: 'Exchange Dix' },
        { label: 'Show Dix (10)', value: 'Show Dix' },
        { label: 'Royal Marriage (40)', value: 'Royal Marriage' },
        { label: 'Common Marriage (20)', value: 'Common Marriage' },
        { label: 'Pinochle (40)', value: "Pinochle" },
        { label: 'Double Pinochle (300)', value: 'Double Pinochle' },
        { label: 'Aces Around (100)', value: 'Aces Around' },
        { label: 'Kings Around (80)', value: 'Kings Around' },
        { label: 'Queens Around (60)', value: 'Queens Around' },
        { label: 'Jacks Around (40)', value: 'Jacks Around' },
        { label: 'Royal Flush (150)', value: 'Royal Flush' },
        { label: 'Double Flush (1500)', value: 'Double Flush' },
    ];

    const handleSelectChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setSelectedOption(value);
        setAdd(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (add) {
            updateScore( selectedOption, player);
            setAdd('');
            setSelectedOption(''); // Reset selected option after submitting
        }
    };

    return (
        <Box sx={{ margin: '20px' }}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="score-select-label">Classes</InputLabel>
                                <Select
                                    labelId="score-select-label"
                                    id="score-select"
                                    value={selectedOption}
                                    label="Classes"
                                    onChange={handleSelectChange}
                                    displayEmpty
                                >
                                    {scoringOptions.map(option => (
                                        <MenuItem key={option.label} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className="plus-button" variant="outlined" type="submit"> <AutoAwesomeIcon /> Add</Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </Box>
    );
}

export default ScoreInput;