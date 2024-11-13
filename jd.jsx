import React, { useState } from 'react';
import './jd.css';
function JobDescriptionForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    stipend: '',
    location: '',
    scheduleDate: '',
    eligibleBranches: '',
    googleFormLink: ''
  });

  // Update form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you could send the data to a backend or perform any further processing
  };

  return (
    <div className="form-container">
      <h2>Job Description Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Stipend:</label>
          <input
            type="text"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Schedule Date:</label>
          <input
            type="date"
            name="scheduleDate"
            value={formData.scheduleDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Eligible Branches:</label>
          <input
            type="text"
            name="eligibleBranches"
            value={formData.eligibleBranches}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Google Form Link:</label>
          <input
            type="url"
            name="googleFormLink"
            value={formData.googleFormLink}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Displaying the entered information for preview */}
      <div style={{ marginTop: '20px' }}>
        <h3>Preview:</h3>
        <p><strong>Company Name:</strong> {formData.companyName}</p>
        <p><strong>Stipend:</strong> {formData.stipend}</p>
        <p><strong>Location:</strong> {formData.location}</p>
        <p><strong>Schedule Date:</strong> {formData.scheduleDate}</p>
        <p><strong>Eligible Branches:</strong> {formData.eligibleBranches}</p>
        {formData.googleFormLink && (
          <p>
            <strong>Google Form Link:</strong>{' '}
            <a href={formData.googleFormLink} target="_blank" rel="noopener noreferrer">
              Click here to open the form
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default JobDescriptionForm;
