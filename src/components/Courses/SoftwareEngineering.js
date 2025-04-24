import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SoftwareEngineering.css';

const SoftwareEngineering = () => {
    return (
        <div className="software-engineering-page">
            
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>Teacher Dashboard</h2>
                <ul>
                    <li><Link to="/create-course">Create Course</Link></li>
                    <li><Link to="/view-courses">View Courses</Link></li>
                    <li><Link to="/manage-assignments">Manage Assignments</Link></li>
                    <li><Link to="/grade-submissions">Grade Submissions</Link></li>
                    <li><Link to="/teacher-profile">Profile</Link></li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="main-content">
                <h1>Faculty</h1>
                <h2>SOFTWARE ENGINEERING</h2>
                <p>SECTION 6 YEAR 2</p>

                <div className="content">
                    {/* Assignment Cards */}
                    <div className="assignment-box">
                        <h3>Figma Assignments</h3>
                        <Link to="/figma-submissions" className="link-button">View student submissions</Link>
                    </div>

                    <div className="assignment-box">
                        <h3>Class Diagram Assignment</h3>
                        <Link to="/class-diagram-submissions" className="link-button">View student submissions</Link>
                    </div>

                    <div className="assignment-box">
                        <h3>Prototype Assignment</h3>
                        <Link to="/prototype-submissions" className="link-button">View student submissions</Link>
                    </div>

                    <div className="assignment-box">
                        <h3>Sequence Diagram Assignment</h3>
                        <Link to="/sequence-diagram-submissions" className="link-button">View student submissions</Link>
                    </div>

                    {/* Action Cards */}
                    <div className="action-box">
                        <h3>CREATE NEW ASSIGNMENTS</h3>
                    </div>

                    <div className="action-box">
                        <h3>VIEW OLD ASSIGNMENTS</h3>
                    </div>

                    <div className="action-box">
                        <h3>VIEW CLASS ROSTER</h3>
                    </div>

                    <div className="action-box">
                        <h3>EDIT ATTENDANCE</h3>
                    </div>
                </div>

                {/* Return Home Button */}
                <Link to="/home" className="return-home">RETURN TO HOME PAGE</Link>
            </div>
        </div>
    );
};

export default SoftwareEngineering;
