import React from "react";
import "./Option.css";

const Option = ({ optionText, index, currentAnswer,onSelectAnswer, correctAnswer, timeLeft}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && optionText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === optionText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer || timeLeft==0 ? "disabled-answer" : "";

 

  return (
    <div
      className={`option ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(optionText)}
    >
      <div className="option_letter">{letterMapping[index]}</div>
      <div className="option_text">{optionText}</div>
    </div>
  );
};

export default Option;