import React from 'react'
import { Question } from './Question'

export const QuestionList = ({questions = []}) => {
    return (
        <div>
            {
                questions.map((question) => {
                    return (<Question question={question} key={question.title}/>)
                })
            }
        </div>
    )
}
