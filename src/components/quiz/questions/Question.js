import React, { useState } from 'react'
import '../quiz.css'

export const Question = ({question}) => {

    const [correct, setCorrectMessage] = useState(null);
    const selectOption = (option) => {
        setCorrectMessage(option.isCorrect);
        setTimeout(() => {
            setCorrectMessage(null);
        }, 2000);
    }
    return (
        <div className="question-container">
            <h4>{question.title}</h4>
            {
                question.options.map((option, index) =>
                <div className="single-option" key={option.title} onClick={() => selectOption(option)}>{index + 1}. {option.title}</div>
                )
            }
            {correct === true && <div className="correct-answer">Correct Answer!</div>}
            {correct === false && <div className="wrong-answer">!Wrong Answer</div>}
        </div>
    )
}
