import React, {useState, useEffect} from 'react'
import { quizAPI } from '../../services/quiz.service';
import { Quiz } from './Quiz'
import { QuizDetails } from './QuizDetails';
import './quiz.css';

export const QuizList = ({quizList = [], deleteQuiz}) => {
    const [quizTitle, setQuizTitle] = useState();
    const [quizDetails, setQuizDetails] = useState();
    const [isDetailsLoaded, setIsDetailsLoaded] = useState(false);

    const getQuizDetails = async () => {
        if (quizTitle) {
            setIsDetailsLoaded(false);
            const details = await quizAPI.getQuizDetails({id: quizTitle});
            setQuizDetails(() => details.data[0]);
            setIsDetailsLoaded(true);
        }
    }

    useEffect(() => {
        // console.log(quizTitle)
        getQuizDetails();
        // eslint-disable-next-line
    }, [quizTitle]);

    const onQuizSelect = (quizId) => {
        setQuizTitle((prevQuiz) => {
            // console.log(`Prev selected: ${prevQuiz}, now selected: ${quizId}`);
            // setIsNewQuiz(prevQuiz !== quizId);
            return quizId;
        })
    }
    
    return (
        <div className="quiz-list-container">
            <div>
                <button className="btn btn-primary">Add New Quiz</button>
            </div>
            {
                quizList.map((quiz) => {
                    return (
                        <Quiz 
                        quiz={quiz}
                        key={quiz._id}
                        onQuizSelect={() => onQuizSelect(quiz._id)} 
                        deleteQuiz={() => deleteQuiz(quiz._id)}
                        />
                    )
                })
            }

            { isDetailsLoaded && <QuizDetails quizDetails={quizDetails} />}
        </div>
    )
}
