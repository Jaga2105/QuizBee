import React, { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswer } from "../helper";

const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  attemptingQuestionIndex:0,
  qnStatus: [
    {
      options: shuffleAnswer(questions[0]),
      currentAnswer: "",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = state.currentQuestionIndex + 1;
      let attemptingQuestionIndex = state.attemptingQuestionIndex;
      if (currentQuestionIndex < state.questions.length && currentQuestionIndex > attemptingQuestionIndex) {
        const options = state.showResults
        ? []
        : shuffleAnswer(state.questions[currentQuestionIndex]);
        state.qnStatus.push({ currentAnswer: "", options: options });
        attemptingQuestionIndex = attemptingQuestionIndex + 1;
      }
      return {
        ...state,
        showResults,
        currentQuestionIndex,
        attemptingQuestionIndex
      };
    }
    case "PREV_QUESTION": {
      const currentQuestionIndex = state.currentQuestionIndex - 1;
      return {
        ...state,
        currentQuestionIndex,
      };
    }
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      const curStatus = {};
      state.qnStatus[state.currentQuestionIndex].currentAnswer = action.payload;
      const qnStatus = state.qnStatus;
      return {
        ...state,
        qnStatus,
        correctAnswerCount,
      };
    }
    case "RESTART_QUIZ": {
      return {
        ...initialState,
        qnStatus: [
          {
            options: shuffleAnswer(questions[0]),
            currentAnswer: "",
          },
        ]
      };
    }
    case "SET_UNATTEMPTED_QUESTION_STATUS": {
      if(state.qnStatus.length < state.questions.length){
        for(let i=state.qnStatus.length ;i<state.questions.length; i++){
          const options = shuffleAnswer(state.questions[i]);
        state.qnStatus.push({ currentAnswer: "", options: options });
        }
      }
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
