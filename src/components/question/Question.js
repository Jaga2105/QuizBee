import React, { useContext } from 'react'
import "./Question.css"
import Option from '../options/Option'
import { QuizContext } from '../../context/quiz';

const Question = ({timeLeft}) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
        <div className="question">{currentQuestion.question}</div>
        <div className="options">
            {quizState.qnStatus[quizState.currentQuestionIndex].options.map((option, index)=>(
              <Option
                optionText={option}
                // currentAnswer={quizState.currentAnswer}
                currentAnswer={quizState.qnStatus[quizState.currentQuestionIndex].currentAnswer}
                correctAnswer={currentQuestion.correctAnswer}
                key={index}
                index={index}
                onSelectAnswer={(optionText)=>
                  dispatch({type:"SELECT_ANSWER", payload:optionText})}
                />
            ))

            }
        </div>
    </div>
  )
}

export default Question