import React, { useContext, useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../question/Question";
import { QuizContext } from "../../context/quiz";
import { useNavigate } from "react-router-dom";
import { timerFormatter } from "../../helper";

const Quiz = () => {
  const navigate = useNavigate();
  const [quizState, dispatch] = useContext(QuizContext);
  const [timeLeft, setTimeLeft] = useState(120);
  // const selectedOption = quizState.qnStatus[quizState.currentQuestionIndex].currentAnswer;

  const questionHandler = () =>{
      dispatch({ type: "NEXT_QUESTION" })
      if(quizState.currentQuestionIndex=== quizState.questions.length-1){
        navigate("/score")
      }
  }

  useEffect(()=>{
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    }else{
      navigate("/score")
    }
  },[timeLeft])
  return (
    <div className="container">
    <div className="quiz">
      {/* {!quizState.showResults && ( */}

        <div className="quiz_container">
          <div className="score_timer">
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <div className="timer">
            <span>{"Time Left"}</span>
            <span className="timer_right">
              {timerFormatter(timeLeft)}
              </span>
          </div>
          </div>
          
          <Question />
          <div className="buttons">
            <button
              className={`${quizState.currentQuestionIndex===0 ? "btn_disabled" :"btn_prev"}`}
              onClick={() => dispatch({ type: "PREV_QUESTION" })}
              disabled={quizState.currentQuestionIndex===0}
            >
              Back
            </button>

            <button
              className="btn_primary"
              onClick={() =>questionHandler()} 
              
            >
              Next
            </button>

          </div>
        </div>
      {/* )} */}
    </div>
    </div>
  );
};

export default Quiz;
