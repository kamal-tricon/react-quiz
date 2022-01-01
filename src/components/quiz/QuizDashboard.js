import React, {useState, useEffect} from 'react'
import { quizAPI } from '../../services/quiz.service';
import { QuizList } from './QuizList';

export const QuizDashboard = () => {

    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        const getData = () => {
            quizAPI.getQuizs().then((response) => {
                setQuizList(response.data);
                // console.log(quizList);

            })
        }
        getData();
        // eslint-disable-next-line
    }, [])

    const deleteQuiz = async (quizId) => {
        await quizAPI.deleteQuiz({id: quizId});
        quizAPI.getQuizs().then((response) => {
            setQuizList(response.data);
        });
    };

    return (
        <div>
            {/* Inside quiz component {quizList[0] && quizList[0].id} {quizList.length} */}
            <QuizList quizList={quizList} deleteQuiz={(id) => deleteQuiz(id)}/>
        </div>
    )
}
