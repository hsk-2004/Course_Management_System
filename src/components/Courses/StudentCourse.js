import React from 'react';
import "../../styles/StudentCourse.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">BML Munjal University</div>
        <nav>
          <ul>
            <li>🏠 Home</li>
            <li>📚 Courses</li>
            <li>✉️ Messages</li>
            <li>📝 Assignments</li>
            <li>👤 Profile</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header>
          <h2>Student</h2>
          <p>Software Engineering</p>
        </header>

        {/* Main Cards Section */}
        <div className="content-cards">
          <div className="card attendance">
            <h3>Attendance</h3>
            <div className="box">View Attendance</div>
          </div>

          <div className="card assignments">
            <h3>Assignments</h3>
            <div className="box">Figma Assignment</div>
            <div className="box">Class Diagram Assignment</div>
          </div>

          <div className="card grades">
            <h3>Grades</h3>
            <div className="box">View Grades</div>
          </div>

          <div className="card collaboration">
            <h3>Collaboration</h3>
            <div className="box">Peer Review</div>
            <div className="box">Group Project</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
