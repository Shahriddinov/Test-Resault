import React from 'react';
import './calendar.scss';

const Calendar = () => {
    return (
        <div className="calendar">
            <div className="date">May 29, 2023
                <hr style={{marginTop: "10px"}}/>
            </div>

            <ul className="calendar_events">
                <li className="calendar_events_item">
                    <strong style={{display: "flex", alignItems: "end"}}>10:00 AM</strong>
                    <div className="calendar_events_item_rightLine"></div>
                    <div>
                        <span style={{color: "#BDBCBCFF"}}>Meeting</span> <br/>
                        New learning formats
                    </div>
                </li>
                <div className="calendar_events_bottomLine"></div>

                <li className="calendar_events_item">
                    <strong style={{display: "flex", alignItems: "end"}}>11:00 AM</strong>
                    <div className="calendar_events_item_rightLine"></div>
                    <div>
                        <span style={{color: "#BDBCBCFF"}}>Lecture</span> <br/>
                        Web Design Trends
                    </div>
                </li>
                <div className="calendar_events_bottomLine"></div>
                <li className="calendar_events_item">
                    <strong style={{display: "flex", alignItems: "end"}}>02:00 PM</strong>
                    <div className="calendar_events_item_rightLine"></div>
                    <div>
                        <span style={{color: "#BDBCBCFF"}}>Lesson</span> <br/>
                        Java Script Features
                    </div>
                </li>
                <div className="calendar_events_bottomLine"></div>
                <li className="calendar_events_item">
                    <strong style={{display: "flex", alignItems: "end"}}>04:30 PM</strong>
                    <div className="calendar_events_item_rightLine"></div>
                    <div>
                        <span style={{color: "#BDBCBCFF"}}>Exam</span> <br/>
                        Java Script
                    </div>
                </li>
            </ul>
            <button className="calendar_allEvents">All events</button>

            <div className="card">
                <p className="card_subP">Buy Premium <br/> and get access <br/> to new courses</p>
                <button>More detailed</button>
            </div>
        </div>
    );
};

export default Calendar;
