import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => navigate("/manage-students")}>Manage Students</li>
          <li onClick={() => navigate("/manage-teachers")}>Manage Teachers</li>
          <li onClick={() => navigate("/manage-courses")}>Manage Courses</li>
          <li onClick={() => navigate("/admin-profile")}>Profile</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="dashboard-content">
        <header>
          <h1>Administrator</h1>
        </header>

        {/* Overview Section */}
        <section className="overview">
          <div className="overview-box orange" onClick={() => navigate("/students")}>
            Total Students
          </div>
          <div className="overview-box blue" onClick={() => navigate("/teachers")}>
            Total Faculty
          </div>
          <div className="overview-box green" onClick={() => navigate("/Manage-Courses")}>
            Total Courses
          </div>
          <div className="overview-box purple" onClick={() => navigate("/exam-schedule")}>
            Exam Schedule
          </div>
        </section>

        {/* Feedback Section and Calendar */}
        <section className="feedback-container">
          <div className="feedback-section">
            <div className="feedback-box green" onClick={() => navigate("/student-feedback")}>
              STUDENT FEEDBACK
            </div>
            <div className="feedback-box purple" onClick={() => navigate("/faculty-feedback")}>
              FACULTY FEEDBACK
            </div>
          </div>

          <section className="calendar-container">
            <div className="calendar">
              <h3>April 23, 2025</h3>
              <div className="calendar-view">
                <h4>Calendar</h4>
                <div className="date-grid">
                  {[...Array(30)].map((_, i) => (
                    <span key={i} className={i % 7 === 0 ? "highlight" : ""}>
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="modify-section">
          <h3>Modify Teachers</h3>
          <div className="modify-box green" onClick={() => navigate("/modify-teacher")}>
            Dr. Nishtha Phutela
          </div>

          <h3>Modify Students</h3>
          <div className="modify-box purple" onClick={() => navigate("/modify-student")}>
            SOET
          </div>

          <h3>Modify Courses</h3>
          <div className="modify-box orange" onClick={() => navigate("/modify-course/ml")}>
            Machine Learning
          </div>
          <div className="modify-box yellow" onClick={() => navigate("/modify-course/se")}>
            Software Engineering
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminDashboard;
