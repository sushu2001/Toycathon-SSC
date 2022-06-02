import React, { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./quiz_end.css";
function Quiz_end() {
  const navigate=useNavigate();
  const { id,total } = useParams();
    let correct = (id)
    let wrong=total-correct
  // const { state } = this.props.location;
  // let tot =state.total;
  // let cor= state.correct;
  return (
    <>
    <div className='Q_name'>
        <h2>Quiz Name</h2>
    </div>
    <div className="result_content">
    <div>
      <h2>Congratulations!!</h2>
      <div className="congo_img">
        {/* <img src="./Quiz_result.jpeg" alt="congratulations" srcset="" /> */}
      </div>
      <div className="result_score">
        <table>
          <td>
            <tr>
            Score
            </tr>
          </td>
          <td>
            <tr>
              {10*correct}/{10*total}
            </tr>
          </td>
        </table>
      </div>
      <div className="score">
        <table>

        <td >
          <tr>
          <img src="" className='table_img' alt="" />  {correct}/{total}
          </tr>
          <tr>
            Correct
          </tr>
        </td>
        <td >
          <tr>
            <img src="https://cdn-icons-png.flaticon.com/512/6711/6711656.png" className='table_img' alt="" />
            {wrong}/{total}
          </tr>
          <tr>
            Wrong
          </tr>
        </td> 
        </table>
      </div>
      <div className="share">
        <h3>Share via</h3>
        <div className='whatsapp'>
         <a href=""> 
         <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-256.png" alt="Instagram" />
         </a>
         <a href="">
          <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-256.png" alt="Whats app" />
           </a> 
        </div>
      </div>

      </div>
      <div className="continue_btn">
        <button onClick={()=>{navigate(`/prac`)}}>Continue</button>
      </div>
    </div>
    </>
  )
}

export default Quiz_end