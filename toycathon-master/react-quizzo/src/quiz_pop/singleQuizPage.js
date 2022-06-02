
// Added Just for Understanding Purpose

import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';

const QuizPage = () => {
    const { id } = useParams();
    let quizId = (id)
    let [quiz, setQuiz] = useState(null)
    useEffect(()=>{
        getQuiz()
    }, [quizId])
    let getQuiz = async () =>{
        let response = await fetch('http://127.0.0.1:8000/notes/Algebra/')
        let data = await response.json()
        console.log(data)
        setQuiz(data)
    }
    return (
        <div>
            <h2>Single Page {quiz?.id} </h2>
        </div>
    )
}

export default QuizPage