export const shuffleAnswer = (question) => {
  if (!question) return [];

  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((opt) => ({ sort: Math.random(), value: opt }))
    .sort((a, b) => a.sort - b.sort)
    .map((opt) => opt.value);
};

export const timerFormatter = (time) => {
  const a = time % 60;
  let b;
  if (a < 10) {
    b = `0${a}`;
  } else {
    b = a;
  }
  const final = `0${Math.floor(time / 60)}:${b}`;
  return final;
};
