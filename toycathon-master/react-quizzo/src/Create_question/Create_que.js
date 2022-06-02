import React from 'react'
import "./css/create_que.css";
import {useNavigate,useParams}  from 'react-router-dom'
import DjangoCSRFToken from 'django-react-csrftoken';
function Create_que() {
  const { id } = useParams();
    let qid = (id)
  let navigate = useNavigate();
   const createpage = e => {
    e.preventDefault();
    navigate('/create_q');
   }
    const dash = e => {
        e.preventDefault();
        navigate('/cc_dash');
    }
  return (
    <>
      <form className="createqdata" action="/AddQuestion/"  method='POST'>
      <DjangoCSRFToken/>
        <div className="top_div">
          <div className="quiz_name">
          {qid}
          </div>
          <div className="time">
            <input className='settime' type="text" placeholder='Set Time' name='SetTime' />
          </div>
        </div>
        <section>
          <div className="que_container">
            {/* <h2>Question</h2> */}
            <div className="inner_container">
              <h2>Question no</h2>
              {/* <label htmlFor="h2">__</label> */}
              <h3>Max Points</h3>
              <select name="max_points" id="maxp" >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              {/* <label className='point_label' htmlFor="h3">__</label> */}

              {/* <div className="que_win">
            <h2>Question will appear here</h2>
          </div> */}
            </div>
            <hr />
            <div className="que_box">
              <div className="que_box_1">
                <input className='Enter_que' type="text" placeholder='Enter the question' name='Enter_question' />
              </div>
              <div className="img_view">
                {/* <img className="q_img"src="https://www.colorcombos.com/images/colors/999999.png" alt="" /> */}
                <input type="file" name='input_img' className='input_img' accept="image/png, image/jpeg"></input>
              </div>
            </div>
            <div className="ans_box">
              {/* <button className="button1">Enter Answer Here</button> */}
              <input type="text" className="answerform" placeholder="Enter your answer here" name="answer" />
              <div className="que_box_2">
                <div className="buttongroup">
                  <button className="button_ans" name='mapping'>Mapping</button>
                  {/* <button className="button_ans">Hint</button> */}
                  <input type="text" placeholder='Hint' name='hint' />
                  <button className="button_ans">----</button>
                </div>
              </div>
            </div>

          </div>
          <div className="mapping">
            <h2>Mapping</h2>
          </div>
          <div>
          </div>
          <div className="bottom_buttons">
            <button className="bottom_btns" name='next_btn' type='submit'>Next</button>
            <button className="bottom_btns" name='clear_btn' type='reset'>Clear</button>
            <button className="bottom_btns savebtn" name='SaveQ_btn' onClick={dash}>Save Quiz</button>
          </div>
        </section>
      </form>
      
      
    </>
  )
}

export default Create_que