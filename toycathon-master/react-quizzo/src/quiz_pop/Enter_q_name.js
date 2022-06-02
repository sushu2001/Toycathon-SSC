import React from 'react'
import "./Css/enter_q_name.css";
import {useNavigate}  from 'react-router-dom'
import DjangoCSRFToken from 'django-react-csrftoken';
function Enter_q_name() {
  let navigate = useNavigate();
   const createpage = e => {
    e.preventDefault();
    navigate('/create_q');
   }
    const back = e => {
        e.preventDefault();
        navigate('/cc_dash');
    }
  return (
     <>
        <form className="createquiz" action="/AddQuiz/"  method='POST'>
        <DjangoCSRFToken/>
            <div className="box">
                <div className='EQuiz_input'>
                    <input className='EQuiz' type="text" placeholder='Enter Quiz Name..' name='Enter_q_name' required/>
                </div>
                <div>
                    <input className='EQuiz' type="text" placeholder='Enter Quiz Description' name='Enter_q_des' required/>
                </div>
            </div>
            <div className='EQ_input'> 
                <button className='EQ_btn' id="crbtn" type="submit" >Create</button>
                <button className='EQ_btn' onClick={back}>Back</button>
            </div>
        </form>
    </>
  )
}

export default Enter_q_name;