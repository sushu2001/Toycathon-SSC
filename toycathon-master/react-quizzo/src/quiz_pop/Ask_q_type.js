import React from 'react'
import "./Css/ask_q_type.css";

function Ask_q_type() {
  return (
    <>
    <div className="ask_option">
        <h2>Which type of Quiz you want to create?</h2>
        <div className='options_quiz_c'>
        <button className='options_c' >Private</button>
        <button  className='options_c'>Public</button>
        </div>
    </div>
    </>
  )
}

export default Ask_q_type;