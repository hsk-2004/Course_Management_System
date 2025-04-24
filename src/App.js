import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard";
import CreateCourse from "./components/Courses/CreateCourse";
import SubmitAssignment from "./components/Assignments/SubmitAssignment";
import Students from "./components/Courses/Students";
import SoftwareEngineering from "./components/Courses/SoftwareEngineering";
import StudentCourse from "./components/Courses/StudentCourse";
import ManageCourses from "./components/Courses/ManageCourses"; // Already correctly imported

import "./styles/App.css";

// Protected Route Wrapper
const ProtectedRoute = ({ element }) => {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  return loggedInUser ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Dashboards */}
          <Route
            path="/student-dashboard"
            element={<ProtectedRoute element={<StudentDashboard />} />}
          />
          <Route
            path="/admin-dashboard"
            element={<ProtectedRoute element={<AdminDashboard />} />}
          />
          <Route
            path="/teacher-dashboard"
            element={<ProtectedRoute element={<TeacherDashboard />} />}
          />

          {/* Protected Features */}
          <Route
            path="/create-course"
            element={<ProtectedRoute element={<CreateCourse />} />}
          />
          <Route
            path="/submit-assignment"
            element={<ProtectedRoute element={<SubmitAssignment />} />}
          />
          <Route
            path="/students"
            element={<ProtectedRoute element={<Students />} />}
          />

          {/* Software Engineering Course */}
          <Route
            path="/software-engineering"
            element={<ProtectedRoute element={<SoftwareEngineering />} />}
          />

          {/* Student Course */}
          <Route
            path="/student-course"
            element={<ProtectedRoute element={<StudentCourse />} />}
          />

          {/* Manage Courses */}
          <Route
            path="/manage-courses"
            element={<ProtectedRoute element={<ManageCourses />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
