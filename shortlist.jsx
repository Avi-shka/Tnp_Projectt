import React, { useState } from 'react';
import './shortlist.css';

function ShortlistedStudentsTable() {
  // Sample data - In a real app, this would come from a backend API or database
  const [shortlistedStudents, setShortlistedStudents] = useState([
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'Bob Smith', email: 'bob@example.com' },
    { name: 'Carol Davis', email: 'carol@example.com' },
  ]);

  return (
    <div>
    <div className="table-container">
      <h2>Shortlisted Students</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {shortlistedStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <p>Check your Mails for further details and Schedule</p>
    </div>
  );
}

export default ShortlistedStudentsTable;
