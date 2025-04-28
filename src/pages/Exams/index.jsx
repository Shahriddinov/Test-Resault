import React from 'react';
import "./exams.scss"
import {Link} from "react-router-dom";

const Exams = () => {
    return (
        <div className="quiz-page">
            <div className="quiz-header">
                <Link to="/courses">
                    <button className="back-button">← Назад</button>
                </Link>
                <div className="quiz-title">Общие знания</div>
                <div className="quiz-progress">
                    <span>1/1</span>
                </div>
            </div>

            <div className="quiz-body">
                <div className="question-wrapper">
                    <div className="question-number">Вопрос 1</div>
                    <div className="question-text">What is the capital of France?</div>
                    <div className="answer-options">
                        <button className="answer-button">Paris</button>
                        <button className="answer-button">London</button>
                        <button className="answer-button">Berlin</button>
                        <button className="answer-button">Rome</button>
                    </div>
                </div>
            </div>

            <div className="quiz-footer">
                <button className="footer-button previous">← Предыдущий</button>
                <Link to="/result">
                <button className="footer-button finish">Завершить →</button>
                </Link>
            </div>
        </div>
    );
};

export default Exams;