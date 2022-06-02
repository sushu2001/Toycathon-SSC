import React from 'react'
import "./for_pass.css";
import {useNavigate}  from 'react-router-dom';
import DjangoCSRFToken from 'django-react-csrftoken';

function Forgot_pass() {
  let navigate = useNavigate();
  const mailverified = e => {
   e.preventDefault();
   navigate('/pass_change');
}
  return (
    <form className='Container'>
    <DjangoCSRFToken/>
    <div className='head'>
      <h3>Forgot password? Don't worry</h3>
      
      <input type="text" className='forgot_pass_in' placeholder='Enter your mail' name='forget_pass_mail' />
    </div>
    <div className='btn_div'>
    <button className="btn"type="submit"  onClick={mailverified} name='submit_forgot_pass'>Submit</button>
    </div>
    </form> 
  )
}

export default Forgot_pass;