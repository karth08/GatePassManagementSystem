import React, { useState } from 'react';
import axios from 'axios';

function StudentPage() {
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentId = 'student-id'; // Replace with actual student ID (or fetch from auth)
    
    try {
      await axios.post('http://localhost:5000/api/requests', { studentId, reason });
      setMessage('Gate pass request submitted successfully');
    } catch (error) {
      setMessage('Failed to submit request');
    }
  };

  return (
    <div>
      <h2>Apply for Gate Pass</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reason for leaving:</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default StudentPage;
