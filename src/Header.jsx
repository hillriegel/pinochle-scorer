import React from 'react';
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

export default function Header() {

    return (
        <div className="header">
            <div className="page-title">
                <h1><PedalBikeIcon style={{fontSize: '30px'}}/> Paula's Pinochle Pointskeeper</h1>
            </div>
            <div style={{marginRight: '10px'}}>
                <Button><RestartAltIcon style={{fontSize: '50px'}}/></Button>
            </div>
        </div>
    )
}

