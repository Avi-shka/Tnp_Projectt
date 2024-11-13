import React, { useState } from 'react';
import './shortl.css';

function AdminJobShortlistForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    studentName: '',
    jobStatus: 'Shortlisted', // default status
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can send formData to a backend server or process it further
  };

  return (
    <div className="shortlist-form-container">
      <h2>Shortlist Students for Job</h2>
      <form onSubmit={handleSubmit} className="shortlist-form">
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Status:</label>
          <select
            name="jobStatus"
            value={formData.jobStatus}
            onChange={handleChange}
          >
            <option value="Shortlisted">Shortlisted</option>
            <option value="Not Shortlisted">Not Shortlisted</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminJobShortlistForm;
