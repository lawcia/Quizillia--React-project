import React from 'react';
import Result from '../../components/Result/Result';
const Results = props => {
    let emojis = [<p>&#128563;</p>, <p>&#128513;</p>];
    const colors = ['#63B766','#B36B36'];
    return props.score.map((score, index)=> {
        return(
            <Result 
            score = {score}
            maxScore = {props.maxScore}
            player = {index+1}
            emoji = {score < props.maxScore/2? emojis[0] : emojis[1]}
            color = {colors[index]}
            />
        )
    })
}

export default Results;