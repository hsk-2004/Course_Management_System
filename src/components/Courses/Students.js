import React, { useState } from 'react';
import '../../styles/Students.css';

const initialData = {
  SOET: ["John Doe", "Jane Smith"],
  SOM: ["Aman Gupta", "Riya Sen"],
  SOL: ["Arjun Mehta", "Priya Verma"],
  SOLS: ["Vikram Chauhan", "Neha Das"],
  "2024": ["John Doe", "Aman Gupta"],
  "2023": ["Priya Verma", "Neha Das"],
  "2022": ["Jane Smith"],
  "2021": ["Vikram Chauhan"]
};

function Students() {
  const [mockData, setMockData] = useState(initialData);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentCourse, setNewStudentCourse] = useState("");
  const [newStudentBatch, setNewStudentBatch] = useState("");
  const [modalMode, setModalMode] = useState('view');

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setStudents(mockData[group] || []);
    setModalMode('view');
    setShowModal(true);
  };

  const handleAddStudent = () => {
    if (selectedGroup) {
      setNewStudentName("");
      setNewStudentCourse("");
      setNewStudentBatch("");
      setShowAddModal(true);
    } else {
      alert("Please select a department or batch before adding a student.");
    }
  };

  const handleSaveStudent = () => {
    if (newStudentName.trim() !== "" && newStudentCourse && newStudentBatch) {
      const updatedCourseList = [...(mockData[newStudentCourse] || []), newStudentName.trim()];
      const updatedBatchList = [...(mockData[newStudentBatch] || []), newStudentName.trim()];

      setMockData(prev => ({
        ...prev,
        [newStudentCourse]: updatedCourseList,
        [newStudentBatch]: updatedBatchList
      }));

      setStudents(updatedCourseList);
      setShowAddModal(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleRemoveStudent = (name) => {
    const updatedData = { ...mockData };

    Object.keys(updatedData).forEach(group => {
      updatedData[group] = updatedData[group].filter(student => student !== name);
    });

    setMockData(updatedData);

    if (selectedGroup && updatedData[selectedGroup]) {
      setStudents(updatedData[selectedGroup]);
    } else {
      setStudents([]);
    }
  };

  const handleEditStudent = (name) => {
    const newName = prompt("Edit student name:", name);
    if (newName && newName.trim() !== name) {
      const updatedData = { ...mockData };

      Object.keys(updatedData).forEach(group => {
        updatedData[group] = updatedData[group].map(student =>
          student === name ? newName.trim() : student
        );
      });

      setMockData(updatedData);

      if (selectedGroup && updatedData[selectedGroup]) {
        setStudents(updatedData[selectedGroup]);
      } else {
        setStudents([]);
      }
    }
  };

  const handleEditButtonClick = () => {
    const allStudents = Object.values(mockData).flat();
    const uniqueStudents = [...new Set(allStudents)];
    setStudents(uniqueStudents);
    setSelectedGroup("All");
    setModalMode('edit');
    setShowModal(true);
  };

  const handleDeleteButtonClick = () => {
    const allStudents = Object.values(mockData).flat();
    const uniqueStudents = [...new Set(allStudents)];
    setStudents(uniqueStudents);
    setSelectedGroup("All");
    setModalMode('delete');
    setShowModal(true);
  };

  return (
    <div className="students-page">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><a href="/manage-students">Manage Students</a></li>
          <li><a href="/manage-teachers">Manage Teachers</a></li>
          <li><a href="/manage-courses">Manage Courses</a></li>
          <li><a href="/admin-profile">Profile</a></li>
        </ul>
      </aside>

      <div className="main-content">
        <h1>Administrator</h1>

        <div className="student-grid">
          {["SOET", "SOM", "SOL", "SOLS"].map(dept => (
            <div
              key={dept}
              className="student-card"
              onClick={() => handleGroupClick(dept)}
            >
              {dept} →
            </div>
          ))}

          {["2024", "2023", "2022", "2021"].map(batch => (
            <div
              key={batch}
              className="batch-card"
              onClick={() => handleGroupClick(batch)}
            >
              {batch} BATCH
            </div>
          ))}

          <div className="action-card" onClick={handleAddStudent}>ADD STUDENT</div>
          <div className="action-card" onClick={handleDeleteButtonClick}>REMOVE STUDENT</div>
          <div className="action-card" onClick={handleEditButtonClick}>EDIT STUDENT DETAILS</div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>
              {modalMode === 'edit' && 'Edit Students'}
              {modalMode === 'delete' && 'Delete Students'}
              {modalMode === 'view' && `${selectedGroup} - Students`}
            </h2>
            <ul>
              {students.map((student, idx) => (
                <li key={idx} className="student-list-item">
                  {student}
                  <div className="action-buttons">
                    {modalMode === 'edit' && (
                      <button onClick={() => handleEditStudent(student)}>Edit</button>
                    )}
                    {modalMode === 'delete' && (
                      <button onClick={() => handleRemoveStudent(student)}>Delete</button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content small" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Student to {selectedGroup}</h3>
            <input
              type="text"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              placeholder="Enter student name"
            />
            <select
              value={newStudentCourse}
              onChange={(e) => setNewStudentCourse(e.target.value)}
              required
            >
              <option value="">Select Course</option>
              {["SOET", "SOM", "SOL", "SOLS"].map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
            <select
              value={newStudentBatch}
              onChange={(e) => setNewStudentBatch(e.target.value)}
              required
            >
              <option value="">Select Batch</option>
              {["2024", "2023", "2022", "2021"].map(batch => (
                <option key={batch} value={batch}>{batch} BATCH</option>
              ))}
            </select>
            <div className="modal-actions">
              <button onClick={handleSaveStudent}>Save</button>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Students;
