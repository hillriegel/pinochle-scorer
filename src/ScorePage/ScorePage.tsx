import { useState } from 'react';
import PlayerScore from './PlayerScore';  // Ensure this is the correct import
import { Grid } from '@mui/material';
import { PlayerScoresData, PlayerId} from './types';
import Tricks from './Tricks';


const classPoints = {
    'Show Dix': 10,
    'Royal Marriage': 40,
    'Common Marriage': 20,
    'Pinochle': 40,
    'Double Pinochle': 300,
    'Aces Around': 100,
    'Kings Around': 80,
    'Queens Around':60,
    'Jacks Around': 40 ,
    'Run (150)': 150,
    'Double Run': 1500,
};


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

    const isValidClass = (key: any): key is keyof typeof classPoints => {
        return key in classPoints;
    };

    const updateScore = (scoreClass: string, playerId: PlayerId) => {
        console.log("updateScore ", scoreClass);
        if (isValidClass(scoreClass)) {
            setPlayerScores(prevScores => {
                const updatedScores = { ...prevScores };
                const currentList = [...updatedScores[playerId].scoreList];
                const scoreIndex = currentList.findIndex(item => item.class === scoreClass);
        
                if (scoreIndex !== -1) {
                    currentList[scoreIndex] = {
                        ...currentList[scoreIndex],
                        points: currentList[scoreIndex].points + classPoints[scoreClass]
                    };
                } else {
                    currentList.push({ class: scoreClass, points: classPoints[scoreClass] });
                }
                updatedScores[playerId].totalScore = updatedScores[playerId].totalScore + classPoints[scoreClass];
                updatedScores[playerId].scoreList = currentList;
                return updatedScores;
            });
           
        } else {
            console.error(`Invalid score class: ${scoreClass}`);
        }
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
                <Tricks
                    playerId={'player1'} />
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
                <Tricks
                    playerId={'player2'} />
            </Grid>
        </Grid>
    );
}

export default ScorePage;
