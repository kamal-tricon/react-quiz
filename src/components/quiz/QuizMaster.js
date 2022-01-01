import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { quizAPI } from '../../services/quiz.service';

import './quiz.css';

export const QuizMaster = () => {
    const {quizId} = useLocation();
    // const [quizDetails, setQuizDetails] = useState([]);
    const [questionTitle, setQuestionTitle] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOptions, setCorrectOptions] = useState([false, false, false, false]);
    // console.log(quizId);
    useEffect(() => {
        // console.log(quizId);
        // const getDetails = async () => {
        //     const details = await quizAPI.getQuizDetails();
        //     setQuizDetails(prev => details.data);
        // }
        // getDetails();
        // eslint-disable-next-line
    }, []);

    const updateValue = (e, index) => {
        setOptions((prev) => {
            const data = [...prev];
            data[index] = e.target.value;
            return [...data];
        });
    }

    const updateCorrectOption = (e, index) => {
        setCorrectOptions((prev) => {
            const data = [...prev];
            data.fill(false);
            data[index] = e.target.checked;
            return [...data];
        });
    }

    const updateQuestion = (e) => {
        setQuestionTitle(e.target.value);
    }

    const saveDetails = () => {
        // console.log(questionTitle, options, correctOptions);

        const requestBody = {
            id: quizId,
            questions: [
                {
                    id: 0,
                    title: questionTitle,
                    options: [
                        {title: options[0], isCorrect: correctOptions[0]},
                        {title: options[1], isCorrect: correctOptions[1]},
                        {title: options[2], isCorrect: correctOptions[2]},
                        {title: options[3], isCorrect: correctOptions[3]}
                    ]
                }
            ]
        };
        console.log(requestBody);
        if (requestBody.id) {
            quizAPI.updateQuiz(requestBody).then((data) => console.log(data));
        }
    }
    return (
        <div>
            This is quiz master
            {/* {
                quizDetails.map((quiz) => {
                    return (
                        <div key={quiz._id}>

                        </div>
                    )
                })
            } */}

            <div className="question-form">
                <div className="form-group">
                    <label htmlFor="questiontitle"></label>
                    <input className="form-control" value={questionTitle} onChange={(e) => updateQuestion(e)} id="questiontitle" type="text" placeholder="Title of the question"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="option1"></label>
                    <input className="form-control" value={options[0]} onChange={(e) => updateValue(e, 0)} id="option1" type="text" placeholder="Option 1"></input>
                    <span className="form-check">
                        <input type="checkbox" checked={correctOptions[0]} onChange={(e) => updateCorrectOption(e, 0)} className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Correct Answer</label>
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="option2"></label>
                    <input className="form-control" value={options[1]} onChange={(e) => updateValue(e, 1)} id="option2" type="text" placeholder="Option 2"></input>
                    <span className="form-check">
                        <input type="checkbox" checked={correctOptions[1]} onChange={(e) => updateCorrectOption(e, 1)} className="form-check-input" id="exampleCheck2"/>
                        <label className="form-check-label" htmlFor="exampleCheck2">Correct Answer</label>
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="option3"></label>
                    <input className="form-control" value={options[2]} onChange={(e) => updateValue(e, 2)} id="option3" type="text" placeholder="Option 3"></input>
                    <span className="form-check">
                        <input type="checkbox" checked={correctOptions[2]} onChange={(e) => updateCorrectOption(e, 2)} className="form-check-input" id="exampleCheck3"/>
                        <label className="form-check-label" htmlFor="exampleCheck3">Correct Answer</label>
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="option4"></label>
                    <input className="form-control" value={options[3]} onChange={(e) => updateValue(e, 3)} id="option4" type="text" placeholder="Option 4"></input>
                    <span className="form-check">
                        <input type="checkbox" checked={correctOptions[3]} onChange={(e) => updateCorrectOption(e, 3)} className="form-check-input" id="exampleCheck4"/>
                        <label className="form-check-label" htmlFor="exampleCheck4">Correct Answer</label>
                    </span>
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => saveDetails()}>Save</button>
        </div>
    )
}
