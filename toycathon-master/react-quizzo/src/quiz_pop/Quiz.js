// Added Just for Understanding Purpose

import React, {useState, useEffect} from 'react'

const QuizListPage = () =>{
    let [quizes, setQuizs] = useState([])
    useEffect(()=>{
        getQuizs()
    }, [])

    let getQuizs = async () =>{
        let response = await fetch("http://127.0.0.1:8000/notes/")
        let data = await response.json()
        console.log('DATA', data)
        setQuizs(data)
    }
    return(
        <div>
            <div className='quiz-list'>
                {
                    quizes.map((quiz)=>(
                        <div>
                        <h2>{quiz.id}</h2>
                        <h2>{quiz.domain}</h2>
                        <div>
                            <h2>{quiz.QuestionSet[0]}</h2>
                            if(quiz.QuestionSet[1])
                            {
                                <h2>{quiz.QuestionSet[1]}</h2>
                            }
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default QuizListPage