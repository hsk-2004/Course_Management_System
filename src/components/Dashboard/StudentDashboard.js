import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";


const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("missed"); // Toggle between Missed & Due

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">BML Munjal University</div>
        <nav>
          <ul>
            <li><Link to="/dashboard">🏠 Dashboard</Link></li>
            <li><Link to="/courses">📚 Courses</Link></li>
            <li><Link to="/messages">✉️ Messages</Link></li>
            <li><Link to="/assignments">📝 Assignments</Link></li>
            <li><Link to="/profile">👤 Profile</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header>
          <h2>Student Dashboard</h2>
        </header>

        <section className="courses">
          <h3>Your Courses</h3>
          <div className="course-list">
            <Link to="/student-course" className="course-link">
              <div className="course">Software Engineering</div>
            </Link>
            <div className="course">Machine Learning</div>
            <div className="course">Mobile App Development</div>
            <div className="course">Project 2</div>
          </div>
          <Link to="/courses">See all ➝</Link>
        </section>

        <section className="calendar-timetable-container">
          {/* Timetable (Make it Bigger & Left Aligned) */}
          <div className="timetable">
            <h4>Schedule</h4>
            <table className="timetable-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Subject</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>10:00 - 12:10</td><td>SE Class</td></tr>
                <tr><td>12:30 - 02:00</td><td>MAD Class</td></tr>
                <tr><td>03:00 - 05:00</td><td>PRJ 2</td></tr>
              </tbody>
            </table>
          </div>

          {/* Calendar (Keep it on the Right) */}
          <div className="calendar">
            <h3>April 23, 2025</h3>
            <p>To-Do List</p>
            <button className="todo-button">NOTES TO BE MADE</button>
            <button className="todo-button secondary">DON'T FORGET ABOUT ACTIVITIES</button>

            <div className="calendar-view">
              <h4>Calendar</h4>
              <div className="date-grid">
                {[...Array(30)].map((_, i) => (
                  <span key={i} className={i % 7 === 0 ? "highlight" : ""}>{i + 1}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main> {/* ✅ Corrected: Added missing closing tag */}

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        {/* Assignments Section with Toggle */}
        <section className="assignments">
          <h3>Assignments</h3>
          <div className="assignment-tabs">
            <button 
              className={activeTab === "missed" ? "active" : ""} 
              onClick={() => setActiveTab("missed")}
            >
              Missed
            </button>
            <button 
              className={activeTab === "due" ? "active" : ""} 
              onClick={() => setActiveTab("due")}
            >
              Due
            </button>
          </div>

          <div className="assignment-content">
            {activeTab === "missed" && (
              <div className="assignment-card">Project 1 - Research Paper</div>
            )}
            {activeTab === "due" && (
              <>
                <div className="assignment-card">Software Engineering - Case Study 1 (10:00 AM)</div>
                <div className="assignment-card">Project 2 - Upload Synopsis (Feb 24, 11:00 AM)</div>
              </>
            )}
          </div>
        </section>

        {/* Attendance Section (Square Box) */}
        <section className="attendance">
          <h3>View Attendance</h3>
          <div className="attendance-box">75%</div>
        </section>

        {/* Peer Review Section */}
        <section className="peer-review">
          <h3>Peer Review</h3>
          <p>SE Case Study Review</p>
          <p>📍 Room NB-105</p>
          <p>🕒 Time: 3:00 PM</p>
        </section>
      </aside>
    </div>
  );
};

export default StudentDashboard;
