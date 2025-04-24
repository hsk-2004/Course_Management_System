import React, { useState } from "react";

const CreateCourse = () => {
    const [courseName, setCourseName] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateCourse = () => {
        if (courseName.trim() === "" || description.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert(`Course Created: ${courseName}`);
    };

    return (
        <div>
            <h2>Create Course</h2>
            <input 
                type="text" 
                placeholder="Course Name" 
                value={courseName} 
                onChange={(e) => setCourseName(e.target.value)} 
            />
            <textarea 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button onClick={handleCreateCourse}>Create</button>
        </div>
    );
};

export default CreateCourse;
