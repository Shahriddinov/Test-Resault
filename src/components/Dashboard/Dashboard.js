import React from 'react';
import './dashboard.scss';
import { IoIosStats } from "react-icons/io";
import { MdOutlineShowChart } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Calendar from "../Calendar/Calendar";

const Dashboard = () => {
    return (
        <div className="dashboard">

            <div className="dashboard_stats">
                <div className="dashboard_stats_card">
                    <div className="dashboard_stats_card_statsIcon"><IoIosStats className="dashboard_stats_card_statsIcon_allIcon"/></div>
                   <div className="dashboard_stats_card_statsIcon_title">
                       Average Rating<br/><strong>8/10</strong>
                   </div>
                </div>
                <div className="dashboard_stats_card">
                    <div className="dashboard_stats_card_statsIcon"><MdOutlineShowChart className="dashboard_stats_card_statsIcon_allIcon"/></div>
                    <div className="dashboard_stats_card_statsIcon_title">
                        Active Tasks<br/><strong>12 tasks</strong>
                    </div>
                </div>
                <div className="dashboard_stats_card">
                   <div className="dashboard_stats_card_des">
                       You have new <br/> message
                       <FaLongArrowAltRight className="dashboard_stats_card_des_right"/>
                   </div>
                </div>
            </div>
            <div className="dashboard_calendar">
                <Calendar/>
            </div>

            {/*<div className="chart-area">*/}
            {/*    <div className="bar-chart">*/}
            {/*        <h4>This Week</h4>*/}
            {/*        <div className="bars">*/}
            {/*            {[...Array(7)].map((_, i) => (*/}
            {/*                <div key={i} className={`bar bar-${i}`} />*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="activity">*/}
            {/*        <h4>Activities</h4>*/}
            {/*        <div className="circle">76%</div>*/}
            {/*        <div className="legend">*/}
            {/*            <span className="study">Study 57%</span>*/}
            {/*            <span className="exams">Exams 19%</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="courses">*/}
            {/*    <h4>My Courses</h4>*/}
            {/*    <div className="course-card">*/}
            {/*        <span>Web Design</span>*/}
            {/*        <div className="progress"><div style={{ width: "50%" }} /></div>*/}
            {/*        <button>Continue</button>*/}
            {/*    </div>*/}
            {/*    <div className="course-card">*/}
            {/*        <span>JavaScript</span>*/}
            {/*        <div className="progress"><div style={{ width: "27%" }} /></div>*/}
            {/*        <button>Continue</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Dashboard;
