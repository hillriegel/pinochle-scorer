import { useState, useCallback } from 'react';
import PlayerScore from './PlayerScore'; // Ensure this is the correct import
import { Grid } from '@mui/material';
import { PlayerScoresData, PlayerId } from './types';
import Tricks from './Tricks';
import Header from './Header';
import { CLASS_POINTS, CARD_POINTS} from './points';



function ScorePage() {
    const initialPlayerScores: PlayerScoresData = {
        player1: { name: "Paula", totalScore: 0, meldPoints: 0, trickPoints: 0, scoreList: [{ class: 'start', points: 0 }] },
        player2: { name: "Joy", totalScore: 0, meldPoints: 0, trickPoints: 0, scoreList: [{ class: 'start', points: 0 }] }
    };

    const initialCardCounts = {
        player1: { Aces: 0, Tens: 0, Kings: 0, Queens: 0, Jacks: 0 },
        player2: { Aces: 0, Tens: 0, Kings: 0, Queens: 0, Jacks: 0 }
    };

    const [playerScores, setPlayerScores] = useState<PlayerScoresData>(initialPlayerScores);
    const [cardCounts, setCardCounts] = useState(initialCardCounts);
    const [showNameForm, setShowNameForm] = useState(false);

    const resetAll = () => {
        setPlayerScores(initialPlayerScores);
        setCardCounts(initialCardCounts);
    };

    const handleNameSubmit = (name: string, playerId: PlayerId) => {
        setShowNameForm(false);
        setPlayerScores(prevScores => ({
            ...prevScores,
            [playerId]: { ...prevScores[playerId], name: name }
        }));
    };

    const isValidClass = (key: any): key is keyof typeof CLASS_POINTS => {
        return key in CLASS_POINTS;
    };

    const updateScore = (scoreClass: string, playerId: PlayerId) => {
        if (isValidClass(scoreClass)) {
            setPlayerScores(prevScores => {
                const updatedScores = { ...prevScores };
                const currentMeldPoints = updatedScores[playerId].meldPoints + CLASS_POINTS[scoreClass];
                const currentList = [...updatedScores[playerId].scoreList];
                const scoreIndex = currentList.findIndex(item => item.class === scoreClass);

                if (scoreIndex !== -1) {

                    currentList[scoreIndex] = {
                        ...currentList[scoreIndex],
                        points: currentList[scoreIndex].points + CLASS_POINTS[scoreClass]
                    };
                } else {
                    currentList.push({ class: scoreClass, points: CLASS_POINTS[scoreClass] });
                }

                // Recalculate totalScore
                const totalScore = currentList.reduce((total, item) => total + item.points, 0);
                updatedScores[playerId].meldPoints = currentMeldPoints;
                updatedScores[playerId].scoreList = currentList;
                updatedScores[playerId].totalScore = totalScore + updatedScores[playerId].trickPoints;

                return updatedScores;
            });
        } else {
            console.error(`Invalid score class: ${scoreClass}`);
        }
    };

    const deleteMeldItem = (playerId: PlayerId, scoreClass: string) => {
        setPlayerScores(prevScores => {
            const updatedScores = { ...prevScores };
            const currentList = [...updatedScores[playerId].scoreList];
            const newList = currentList.filter(item => item.class !== scoreClass);

            // Recalculate totalScore
            const totalScore = newList.reduce((total, item) => total + item.points, 0);

            updatedScores[playerId].scoreList = newList;
            updatedScores[playerId].totalScore = totalScore;

            return updatedScores;
        });
    };

    const handleIncrement = useCallback((cardType: keyof typeof CARD_POINTS, playerId: PlayerId) => {
        setPlayerScores(prevScores => {
            const updatedScores = { ...prevScores };
            updatedScores[playerId].totalScore += CARD_POINTS[cardType];
            updatedScores[playerId].trickPoints += CARD_POINTS[cardType];
            return updatedScores;
        });

        setCardCounts(prevCounts => {
            const updatedCounts = { ...prevCounts };
            updatedCounts[playerId][cardType] ++;
            return updatedCounts;
        });
    }, []);

    const handleDecrement = useCallback((cardType: keyof typeof CARD_POINTS, playerId: PlayerId) => {
        setPlayerScores(prevScores => {
            const updatedScores = { ...prevScores };
            updatedScores[playerId].totalScore -= CARD_POINTS[cardType];
            updatedScores[playerId].trickPoints -= CARD_POINTS[cardType];
            return updatedScores;
        });

        setCardCounts(prevCounts => {
            const updatedCounts = { ...prevCounts };
            if (updatedCounts[playerId][cardType] > 0) {
                updatedCounts[playerId][cardType] -= 1;
            }
            return updatedCounts;
        });
    }, []);

    return (
        <div>
            <Header resetAll={resetAll}/>
            <div className="body-container">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6}>
                        <PlayerScore
                            handleNameSubmit={handleNameSubmit}
                            updateScore={updateScore}
                            playerId='player1'
                            showNameForm={showNameForm}
                            setShowNameForm={setShowNameForm}
                            playerScores={playerScores.player1}
                            deleteMeldItem={deleteMeldItem}
                        />
                        <Tricks
                            playerId='player1'
                            playerScores={playerScores.player1}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            cardCounts={cardCounts.player1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <PlayerScore
                            handleNameSubmit={handleNameSubmit}
                            updateScore={updateScore}
                            playerId='player2'
                            showNameForm={showNameForm}
                            setShowNameForm={setShowNameForm}
                            playerScores={playerScores.player2}
                            deleteMeldItem={deleteMeldItem}
                        />
                        <Tricks
                            playerId='player2'
                            playerScores={playerScores.player2}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                            cardCounts={cardCounts.player2} // Ensure correct cardCounts are passed
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default ScorePage;
