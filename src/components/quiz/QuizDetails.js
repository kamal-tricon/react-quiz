import React from 'react'
import { QuestionList } from './questions/QuestionList';

export const QuizDetails = ({quizDetails}) => {
    // console.log(quizDetails);
    return (
        <div>
            <h2>Selected quiz is: {quizDetails.title}</h2>
            <QuestionList questions={quizDetails.questions}/>
        </div>
    )
}
