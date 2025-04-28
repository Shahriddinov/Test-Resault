import React from 'react';
import './dashboard.scss';
import {IoIosStats} from "react-icons/io";
import {MdOutlineShowChart} from "react-icons/md";
import {FaLongArrowAltRight} from "react-icons/fa";
import Calendar from "../Calendar/Calendar";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

const barData = [
    { day: "Mon", hours: 3 },
    { day: "Tue", hours: 1.5 },
    { day: "Wed", hours: 5 },
    { day: "Thu", hours: 4 },
    { day: "Fri", hours: 2.5 },
    { day: "Sat", hours: 1.5 },
    { day: "Sun", hours: 2 },
];

const pieData = [
    { name: "Study", value: 57 },
    { name: "Exams", value: 19 },
];

const courses = [
    {
        id: 1,
        title: "Web Design",
        lessons: 10,
        progress: 50,
        icon: "🌐", // You can replace with an actual icon later
    },
    {
        id: 2,
        title: "JavaScript",
        lessons: 7,
        progress: 27,
        icon: "🟨", // You can replace with an actual icon later
    },
];

const COLORS = ["#F25C8C", "#F5C242"];
const Dashboard = () => {
    return (
        <div  className="dash">
            <div className="dashboard">
                <div className="dashboard_stats">
                    <div className="flex">
                        <div className="dashboard_stats_card">
                            <div className="dashboard_stats_card_statsIcon"><IoIosStats
                                className="dashboard_stats_card_statsIcon_allIcon"/></div>
                            <div className="dashboard_stats_card_statsIcon_title">
                                Average Rating<br/><strong>8/10</strong>
                            </div>
                        </div>
                        <div className="dashboard_stats_card">
                            <div className="dashboard_stats_card_statsIcon"><MdOutlineShowChart
                                className="dashboard_stats_card_statsIcon_allIcon"/></div>
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


                    <div className="activity-wrapper">
                        <div className="chart-card">
                            <h3>This Week</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={barData}>
                                    <XAxis dataKey="day" />
                                    <YAxis tickFormatter={(value) => `${value}h`} />
                                    <Bar dataKey="hours" fill="#F25C8C" radius={[10, 10, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="activity-summary">
                            <h3>Activities</h3>
                            <div className="donut-chart">
                                <ResponsiveContainer width={120} height={120}>
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            innerRadius={40}
                                            outerRadius={60}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="center-text">76%</div>
                            </div>
                            <ul className="legend">
                                <li><span className="dot study"></span> Study - 57%</li>
                                <li><span className="dot exams"></span> Exams - 19%</li>
                            </ul>
                        </div>
                    </div>

                    <div className="course-wrapper">
                        <div className="course-header">
                            <h3>My Courses</h3>
                            <span className="count">{courses.length}</span>
                        </div>
                        {courses.map((course) => (
                            <div key={course.id} className="course-card">
                                <div className="course-icon">{course.icon}</div>
                                <div className="course-info">
                                    <h4>{course.title}</h4>
                                    <p>{course.lessons} lessons</p>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${course.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="course-progress">
                                    <span>{course.progress}%</span>
                                    <button className="continue-btn">Continue</button>
                                </div>
                            </div>
                        ))}
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
        </div>
    );
};

export default Dashboard;
