import {React} from 'react'
import { Link } from 'react-router-dom'

export const Quiz = ({quiz, onQuizSelect, deleteQuiz}) => {
    return (
        <div>
            <div onClick={onQuizSelect} className="quiz-title">{quiz.title}</div>
            <Link to={
                {
                    pathname: "/quiz/add",
                    quizId: quiz._id
                }
            } className="update-quiz">Update</Link>
            <span className="update-quiz" onClick={deleteQuiz}>Delete</span>
        </div>
    )
}
