import React, { useContext, useEffect } from "react";
import { QuizContext } from "../../context/quiz";
import "./Score.css";
import { useNavigate } from "react-router-dom";

const Score = () => {
  const navigate = useNavigate();
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    dispatch({ type: "SET_UNATTEMPTED_QUESTION_STATUS" });
  }, []);
  return (
    <div className="score_container">
      <div className="results">
        <div className="congratulations">Congratulations!</div>
        <div className="result-info">
          <span>
            You've got {quizState.correctAnswerCount} out of &nbsp;
            {quizState.questions.length}
          </span>
        </div>
        <div className="all_questions_status">
          {quizState.qnStatus.map((question, index) => (
            <SingleQuestionStatus question={question} index={index} />
          ))}
        </div>
        <div className="score_page_btn">
          <button className="exit_btn" 
          onClick={()=>{
            dispatch({ type: "RESTART_QUIZ" })
            navigate("/")}}>Exit</button>
          <button
            className="restart_button"
            onClick={() => {
              dispatch({ type: "RESTART_QUIZ" })
              navigate("/quiz");
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export const SingleQuestionStatus = ({ question, index }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const unattempted_question_status = question.currentAnswer === "";
  const correct_question_status =
    question.currentAnswer === quizState.questions[index].correctAnswer;
  const incorrect_question_status =
    question.currentAnswer !== "" &&
    question.currentAnswer !== quizState.questions[index].correctAnswer;
  const unattempted_classname = unattempted_question_status
    ? "unattempted"
    : "";
  const correct_classname = correct_question_status ? "correct" : "";
  const incorrect_classname = incorrect_question_status ? "incorrect" : "";
  return (
    <div
      className={`questins_status ${unattempted_classname} ${correct_classname} ${incorrect_classname}`}
    >
      {index + 1}
    </div>
  );
};

export default Score;
