import React, { useEffect } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Calendar from "../../components/Calendar/Calendar";
import { FcGoogle } from "react-icons/fc";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CoursesList } from "../../reduxToolkit/CoursesSlice/index";
import { setPage } from "../../reduxToolkit/CoursesSlice/coursesSlice";
import "./style.scss";

const Courses = () => {
    const title = "Courses";
    const dispatch = useDispatch();
    const { data, loading, error, skip, take, totalCount } = useSelector(state => state.CoursesSlice);

    useEffect(() => {
        dispatch(CoursesList({ skip, take }));
    }, [dispatch, skip, take]);

    const handlePageChange = (pageNumber) => {
        const newSkip = (pageNumber - 1) * take;
        dispatch(setPage(newSkip));
    };

    const currentPage = Math.floor(skip / take) + 1;
    const totalPages = Math.ceil(totalCount / take);

    return (
        <Sidebar title={title}>
            <div className="courses">
                <div className="courses_listCourse">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <div className="cards-container">
                            {data.map((course) => (
                                <div key={course.id} className="job-card">
                                    <div className="job-header">
                                        <FcGoogle className="googleIcon" />
                                        <button className="save-btn">
                                            Save <FaRegBookmark />
                                        </button>
                                    </div>
                                    <p className="company">
                                        {course.description}
                                        {/*<span className="company_subTit"> (ID: {course.id})</span>*/}
                                    </p>
                                    <h3 className="position">Course Category: {course.title}</h3>
                                    <div className="tags">
                                        <span className="tag">Online</span>
                                        <span className="tag">Test Available</span>
                                    </div>
                                    <hr />
                                    <div className="footer">
                                        <div className="footer_rates">
                                            <div className="rate">ID: {course.id}</div>
                                            <div className="location">Language: {course.lang || "uz"}</div>
                                        </div>
                                        <Link to={`/exams/${course.id}`}>
                                            <button className="apply-btn">Apply now</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="pagination-btn"
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="pagination-btn"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div className="courses_rights">
                    <Calendar />
                </div>
            </div>
        </Sidebar>
    );
};

export default Courses;
