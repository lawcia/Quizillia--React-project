import React from 'react';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Rating from '../Rating/Rating';
import './Result.css';
const Result = props => {
return(
        <div className = "resultContainer">
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{props.emoji} Player {props.player} got {props.score}/{props.maxScore} </Typography>
        <Rating score={props.score} maxScore={props.maxScore}/>
        </Box>
        </div>
)
}

export default Result