import React, { useState } from 'react';

export default function ScoreInput({ onUpdateScore }) {
    const [score, setScore] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const scoringOptions = [
        { label: 'Select scoring option', value: '' },
        { label: 'Show Dix', value: 10 },
        { label: 'Royal Marriage', value: 40 },
        { label: 'Pinochle', value: 40 },
        { label: 'Double Pinochle', value: 300 },
        // Add additional scoring options here
    ];

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setScore(event.target.value);
    };

    const handleInputChange = (event) => {
        setScore(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (score) {
            onUpdateScore(Number(score));
            setScore('');  // Reset score input after submitting
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="score-select">Choose a score:</label>
            <select id="score-select" value={selectedOption} onChange={handleSelectChange}>
                {scoringOptions.map(option => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label htmlFor="score-input">Or enter a custom score:</label>
            <input
                type="number"
                id="score-input"
                value={score}
                onChange={handleInputChange}
                placeholder="Enter score"
            />
            <button type="submit">Add Score</button>
        </form>
    );
}
