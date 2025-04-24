import React from "react";
import { Link } from "react-router-dom"; // Imported Link for navigation
import "../../styles/TeacherDashboard.css";

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
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

      <main className="dashboard-content">
        <header>
          <h1>Faculty</h1>
        </header>

        {/* Your Courses */}
        <section className="course-management">
          <h2>Your Courses</h2>
          <div className="course-container">
            {/* Added Link to Software Engineering */}
            <div className="course-box orange">
              <Link to="/software-engineering">Software Engineering</Link>
            </div>
            <div className="course-box blue">Project 2</div>
          </div>
        </section>

        {/* Grade Assignments */}
        <section className="grade-assignments">
          <h2>Grade Assignments</h2>
          <div className="assignment-box">
            <div className="assignment-header"></div>
            SE Case Study Progress Report
          </div>
        </section>

        {/* Mark Attendance */}
        <section className="mark-attendance">
          <h2>Mark Attendance</h2>
          <div className="attendance-container">
            <div className="attendance-box orange">
              <div className="attendance-header"></div>
              <div className="attendance-content">
                <span>Section 6 Year 2</span>
              </div>
            </div>
            <div className="attendance-box blue">
              <div className="attendance-header"></div>
              <div className="attendance-content">
                <span>Section 4 Year 2</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="right-sidebar">
        <h3>Upcoming Lectures</h3>
        <div className="lecture-container">
          <div className="lecture-box">
            <div className="lecture-header orange"></div>
            <div className="lecture-content">
              <span>Software Engineering</span><br />
              <span>Feb 24, 10:00 - 12:10</span>
            </div>
          </div>
          <div className="lecture-box">
            <div className="lecture-header blue"></div>
            <div className="lecture-content">
              <span>Mobile Application Development</span><br />
              <span>Feb 24, 12:30 - 02:00</span>
            </div>
          </div>
        </div>

        <div className="notifications">
          <h3>Notifications</h3>
          <div className="notification-box">
            Mark Attendance: AI Class - Mar 5
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TeacherDashboard;
