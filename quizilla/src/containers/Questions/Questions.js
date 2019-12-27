import React from 'react';
import GameBox from '../../components/GameBox/GameBox';
import Rating from '../../components/Rating/Rating';
import { Typography } from '@material-ui/core';
import './Questions.css';
const Questions = props => {
    return(<div className = 'questionsSection'>
           <p 
           className = 'currentPlayer' 
           style={{color: props.color}}>Current Player: {props.player}</p>
           <Typography component = "legend">Current Score: {props.score}/{props.maxScore}</Typography>
           <Rating 
           score={props.score} 
           maxScore={props.maxScore}
           color={props.color}
           />
           <GameBox
           gameInfo={props.gameInfo}
           calculateScore = {props.nextGameState}
           />
           </div>)
}
export default Questions