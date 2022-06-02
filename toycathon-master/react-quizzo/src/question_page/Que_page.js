import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Popup from "./Rightans";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import "./que_page.css";

function Que_page() {
  let navigate = useNavigate();
  const [btnpopup, setbtnpopup] = useState(false);
  const myref = useRef(null);
  const { id } = useParams();
  let quizId = id;
  // console.log(userId)
  let [Ques, setques] = useState([]);

  useEffect(() => {
    getques();
  }, []);
  let question;
  var [data, setdata] = useState(0);
  var [total, settotal] = useState(0);
  let getques = async () => {
    question = "http://127.0.0.1:8000/notes/" + quizId + "/";
    let response = await fetch(question);
    let data = await response.json();
    //  console.log(question)
    setques(data);
  };

  const [checkans, setans] = useState("");
  console.log(checkans);
  function valid(ans) {
    //  console.log(checkans)
    settotal(total + 1);
    if (checkans == ans) {
      setdata(data + 1);
      console.log(data);
      alert("correct answer");
      setans("");
    } else {
      console.log("No");
      alert("wrong answer");
      setans("");
    }
  }
  return (
    <>
      <div className="top_div">
        <div className="quiz_name">
          <h2>{quizId}</h2>
        </div>
        <div className="time">
          <h3>Time</h3>
        </div>
      </div>

      {Ques.map((qu) => (
        <section>
          <div className="que_container">
            <div className="inner_container">
              <h2>{qu.ques_no}</h2>
              {/* {total++} */}
              <h3>{qu.Marks}</h3>
            </div>
            <hr />

            <div className="que_box">
              <div className="que_box_1">{qu.question}</div>

              <div className="img_view">
                <img
                  className="q_img"
                  src="https://www.colorcombos.com/images/colors/999999.png"
                  alt=""
                />
              </div>
            </div>
            <div className="ans_box">
              {/* <form action="submit" > */}

              <input
                value={checkans}
                type="text"
                id="ans"
                ref={myref}
                onChange={(event) => setans(event.target.value)}
                className="answerform"
                placeholder="Enter your answer here"
                name="answer"
              />

              {/* </form>          */}
              <div className="que_box_2">
                <div className="buttongroup">
                  <button
                    className="button_ans"
                    onClick={() => valid(qu.answer)}
                  >
                    Submit
                  </button>
                  {/* <button  className="button_ans" onClick={valid(qu.answer)} >Submit</button> */}
                  <button className="button_ans">----</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <div className="mapping">
        {/* <h2>Mapping</h2>
          {data}
          {total} */}
      </div>
      <div></div>
      <div className="bottom_buttons">
        {/* <button className="bottom_btns">Next</button> */}
        {/* <button className="bottom_btns">Clear</button> */}
        <button
          onClick={() => {
            navigate(`/end_q/${data}/${total}`);
          }}
          className="bottom_btns endbtn"
        >
          End Quiz
        </button>
      </div>
    </>
  );
}

export default Que_page;
