import React, { useEffect, useState } from "react";
import "./exams.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchQuizzesBySubject } from "../../reduxToolkit/QuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { submitQuizAnswers } from "../../reduxToolkit/QuizAnswerSlice";
import {
  saveAnswer,
  setUserAndTestID,
} from "../../reduxToolkit/QuizAnswerSlice/QuizAnswersSlice";

const Exams = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data = {} } = useSelector((state) => state.quizSlice);
  const quizAnswers = useSelector((state) => state.quizAnswers || {});

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const quizzes = data.data || [];
  const quiz = quizzes[currentQuizIndex];
  const questions = quiz?.questions || [];

  useEffect(() => {
    if (id) {
      dispatch(fetchQuizzesBySubject({ subjectId: id }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setSelectedAnswer(null);
    setCurrentIndex(0);
  }, [currentQuizIndex]);

  useEffect(() => {
    if (quiz) {
      dispatch(setUserAndTestID({ userID: 42, testID: quiz.id }));
    }
  }, [quiz]);

  if (!quiz || questions.length === 0) {
    return <div>Загрузка...</div>;
  }

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const isLastQuiz = currentQuizIndex === quizzes.length - 1;

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer.id);
    dispatch(
      saveAnswer({
        questionID: currentQuestion.id,
        answerID: answer.id,
        answerText: answer.answerText,
      })
    );
  };

  const handleFinish = () => {
    const { userID, testID, answers } = quizAnswers;
    dispatch(submitQuizAnswers({ userID, testID, answers }));

    if (!isLastQuiz) {
      setCurrentQuizIndex((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const userID = JSON.parse(sessionStorage.getItem("user"))?.id;

    const testID = quizAnswers?.testID;
    const answers = quizAnswers?.answers || [];

    const latestAnswer = answers.find(
      (a) => a.questionID === currentQuestion.id
    );

    if (userID && testID && latestAnswer) {
      dispatch(
        submitQuizAnswers({
          userID,
          testID,
          answers: [latestAnswer],
        })
      );
    }

    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <Link to="/courses">
          <button className="back-button">← Назад</button>
        </Link>
        <div className="quiz-title">{quiz.title}</div>
        <div className="quiz-progress">
          {currentIndex + 1}/{questions.length}
        </div>
      </div>

      <div className="quiz-body">
        <div className="question-wrapper">
          <div className="question-number">Вопрос {currentIndex + 1}</div>
          <div className="question-text">{currentQuestion.questionText}</div>
          <div className="answer-options">
            {currentQuestion.answers.map((answer) => (
              <button
                key={answer.id}
                className={`answer-button ${
                  selectedAnswer === answer.id ? "selected" : ""
                }`}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="quiz-footer">
        <button
          className="footer-button next"
          onClick={handleNext}
          disabled={!selectedAnswer}
        >
          {isLastQuestion && isLastQuiz ? "Завершить →" : "Следующий →"}
        </button>
      </div>
    </div>
  );
};

export default Exams;
