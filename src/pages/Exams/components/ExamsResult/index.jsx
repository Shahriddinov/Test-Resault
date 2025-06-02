import React from 'react';
import "./examsResult.scss"
import Sidebar from "../../../../components/Sidebar/Sidebar";
import Calendar from "../../../../components/Calendar/Calendar";

const ExamsResults = ({correct = 0, incorrect = 1, total = 1}) => {
    const percentage = Math.round((correct / total) * 100);

    return (
        <Sidebar>
            <div className="flexs">
                <div className="mainCard">
                    <h1 className="results">Общие знания - Результаты</h1>
                    <div className="cards">
                        <div className="circle">
                            <div className="percent">{percentage}%</div>
                            <div className="tryAgain">Попробуйте еще</div>
                        </div>
                        <div className="summary">
                            <div className="resultBlock">
                                <span className="correctNum">{correct}</span>
                                <div>Правильно</div>
                            </div>
                            <div className="resultBlock">
                                <span className="incorrectNum">{incorrect}</span>
                                <div>Неправильно</div>
                            </div>
                            <div className="resultBlock">
                                <span className="totalNum">{total}</span>
                                <div>Всего вопросов</div>
                            </div>
                        </div>
                        <div className="answerBar">
                            <div className="incorrectBar"></div>
                        </div>
                        <div className="buttons">
                            <button className="restart">Начать заново</button>
                            <button className="share">Поделиться результатом</button>
                        </div>
                    </div>
                </div>
                <div className="mainRight">
                    <Calendar/>
                </div>
            </div>

        </Sidebar>
    );
};

export default ExamsResults;