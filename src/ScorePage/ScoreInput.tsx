import React, { useState } from 'react';
import { Grid, Input, Box, InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { PlayerId } from './types';

interface ScoreInputProps {
    updateScore: (score: number, playerId: PlayerId) => void;
    player: PlayerId; 
}

const ScoreInput: React.FC<ScoreInputProps> = ({ updateScore, player }) => {
    const [add, setAdd] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const scoringOptions = [
        { label: 'Show Dix (10)', value: 10 },
        { label: 'Royal Marriage (40)', value: 40 },
        { label: 'Peasant Marriage (20)', value: 20 },
        { label: 'Pinochle (40)', value: 40 },
        { label: 'Double Pinochle (300)', value: 300 },
        { label: 'Aces Around (100)', value: 100 },
        { label: 'Kings Around (80)', value: 80 },
        { label: 'Queens Around (60)', value: 60 },
        { label: 'Jacks Around (40)', value: 40 },
        { label: 'Run (150)', value: 150 },
        { label: 'Double Run (1500)', value: 1500 },
    ];

    const handleSelectChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setSelectedOption(value);
        setAdd(value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdd(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (add) {
            updateScore( Number(add), player);
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
                            <Input
                                type="number"
                                id="score-input"
                                value={add}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" type="submit">Add Score</Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </Box>
    );
}

export default ScoreInput;