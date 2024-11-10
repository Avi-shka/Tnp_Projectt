import React, { useState } from 'react';
import './register.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    cgpa: '',
    tenthMarks: '',
    twelfthMarks: '',
    deadBacklogs: '',
    liveBacklogs: '',
    branch: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'Resume') {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission logic, e.g., sending data to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container form-container">
      <div className="form-header">
        <h2>Sign Up for T&P Cell</h2>
        <p className="text-muted">Fill in your details to create an account</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email ID</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact Number */}
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact Number</label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            name="contact"
            pattern="[0-9]{10}"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        {/* CGPA */}
        <div className="mb-3">
          <label htmlFor="cgpa" className="form-label">CGPA</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="cgpa"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />
        </div>

        {/* 10th Marks */}
        <div className="mb-3">
          <label htmlFor="tenthMarks" className="form-label">10th Marks (%)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="tenthMarks"
            name="tenthMarks"
            value={formData.tenthMarks}
            onChange={handleChange}
            required
          />
        </div>

        {/* 12th Marks */}
        <div className="mb-3">
          <label htmlFor="twelfthMarks" className="form-label">12th Marks (%)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="twelfthMarks"
            name="twelfthMarks"
            value={formData.twelfthMarks}
            onChange={handleChange}
            required
          />
        </div>

        {/* Backlogs */}
        <div className="mb-3">
          <label className="form-label">Backlogs</label>
          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                id="deadBacklogs"
                name="deadBacklogs"
                placeholder="Dead Backlogs"
                value={formData.deadBacklogs}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                id="liveBacklogs"
                name="liveBacklogs"
                placeholder="Live Backlogs"
                value={formData.liveBacklogs}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Branch */}
        <div className="mb-3">
          <label htmlFor="branch" className="form-label">Branch</label>
          <select
            className="form-select"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Branch</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
          </select>
        </div>

        {/* Profile Picture */}
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">Resume</label>
          <input
            type="file"
            className="form-control"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;