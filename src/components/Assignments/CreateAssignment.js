import React, { useState } from "react";

const CreateAssignment = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = () => {
        alert(`Assignment Created: ${title}`);
    };

    return (
        <div>
            <h2>Create Assignment</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button onClick={handleCreate}>Create</button>
        </div>
    );
};

export default CreateAssignment;
