import React from 'react';
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface HeaderProps {
    resetAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ resetAll }) => {
    return (
        <div className="header">
            <div className="page-title">
                <div style={{ marginTop: "-10px" }}>
                    <h1>Paula's Pinochle Pointskeeper</h1>
                </div>
            </div>
            <div style={{ marginRight: '10px' }}>
                <Button onClick={resetAll}>
                    <RestartAltIcon style={{ fontSize: '50px' }} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
