import React, { useState } from "react";

const SubmitAssignment = () => {
    const [file, setFile] = useState(null);

    const handleSubmit = () => {
        alert("Assignment Submitted!");
    };

    return (
        <div>
            <h2>Submit Assignment</h2>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default SubmitAssignment;
