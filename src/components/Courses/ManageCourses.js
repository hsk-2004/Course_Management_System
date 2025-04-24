import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ManageCourses.css';

const API_URL = 'http://localhost:5000/api/courses'; // Update with your backend URL if hosted

const ManageCourses = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseFaculty, setCourseFaculty] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  // Fetch Courses from MongoDB
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('📥 Courses fetched:', data); // Log the fetched courses
        setCourses(data);
      } catch (error) {
        console.error('❌ Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  // Add Course
  const handleAddCourse = async () => {
    if (!courseName || !courseDescription || !courseFaculty) return;

    const newCourse = {
      title: courseName,
      description: courseDescription,
      instructor: courseFaculty,
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCourse),
      });
      const savedCourse = await response.json();
      console.log('✅ Course added:', savedCourse); // Log the saved course
      setCourses([...courses, savedCourse]);
      resetForm();
    } catch (error) {
      console.error('❌ Error adding course:', error);
    }
  };

  // Delete Course
  const handleDeleteCourse = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setCourses(courses.filter((course) => course._id !== id));
      console.log(`✅ Course with ID ${id} deleted`);
    } catch (error) {
      console.error('❌ Error deleting course:', error);
    }
  };

  // Edit Course
  const handleEditCourse = (course) => {
    setIsEditing(true);
    setCurrentCourse(course);
    setCourseName(course.title);
    setCourseDescription(course.description);
    setCourseFaculty(course.instructor);
  };

  // Update Course
  const handleUpdateCourse = async () => {
    const updatedCourse = {
      title: courseName,
      description: courseDescription,
      instructor: courseFaculty,
    };

    try {
      const response = await fetch(`${API_URL}/${currentCourse._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCourse),
      });
      const updated = await response.json();

      setCourses(
        courses.map((course) =>
          course._id === currentCourse._id ? updated : course
        )
      );
      console.log('✅ Course updated:', updated);
      resetForm();
    } catch (error) {
      console.error('❌ Error updating course:', error);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentCourse(null);
    setCourseName('');
    setCourseDescription('');
    setCourseFaculty('');
  };

  return (
    <div className="students-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Course Management</h2>
        <nav>
          <ul>
            <li onClick={() => navigate('/')}>🏠 Home</li>
            <li onClick={() => navigate('/manage-courses')}>📚 Courses</li>
            <li onClick={() => navigate('/admin-profile')}>👤 Profile</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1>Manage Courses</h1>

        {/* Add/Edit Form */}
        <div className="form-container">
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Course Description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Course Faculty"
            value={courseFaculty}
            onChange={(e) => setCourseFaculty(e.target.value)}
          />
          {!isEditing ? (
            <button onClick={handleAddCourse}>Add Course</button>
          ) : (
            <button onClick={handleUpdateCourse}>Update Course</button>
          )}
        </div>

        {/* Course List */}
        <div className="course-list">
          {courses.map((course) => (
            <div key={course._id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Instructor: {course.instructor}</p>
              <button onClick={() => handleEditCourse(course)}>Edit</button>
              <button onClick={() => handleDeleteCourse(course._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
