import React from 'react';
import parse from 'html-react-parser';
import './GameBox.css';

const GameBox = (props) => {
    const formatQuestion = () => {
        let question = props.gameInfo.question
        const reactElement = parse(question)
        return reactElement
    }

    let answers = [...props.gameInfo.incorrect_answers, props.gameInfo.correct_answer].sort();  
    const onClickHandler = (event) => {
        props.calculateScore(event.target.value);
    }

    return(
        <div className = "questionContainer">
            <h3>{formatQuestion()}</h3>
            {answers.map(answer => {
                return <div className = "buttonContainer"> 
                            <button
                                className = "answerButton" 
                                value = {answer} 
                                id = {answer} 
                                onClick={(event)=> onClickHandler(event)}>
                                    {parse(answer)}
                            </button>
                        </div>
            })}
        </div>
    )
}

export default GameBox