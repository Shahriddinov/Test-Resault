import React from 'react';
import './calendar.scss';

const Calendar = () => {
    return (
        <div className="calendar">
            <div className="date">May 29, 2023
                <hr style={{marginTop:"10px"}}/></div>

            <ul className="events">
                <li><strong>10:00 AM</strong> New learning formats</li>
                <li><strong>11:00 AM</strong> Web Design Trends</li>
                <li><strong>2:00 PM</strong> JavaScript Features</li>
                <li><strong>4:30 PM</strong> JavaScript Exam</li>
            </ul>

            <div className="premium">
                <p>Buy Premium and get access to new courses</p>
                <button>More detailed</button>
            </div>
        </div>
    );
};

export default Calendar;
