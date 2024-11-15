import React, { useState, useEffect } from 'react';
import './viewshortlist.css';

function ViewShortlist() {
  const [companies, setCompanies] = useState([]);
  const [shortlistedStudents, setShortlistedStudents] = useState([]);
  const [shortlistCounts, setShortlistCounts] = useState({});

  useEffect(() => {
    // Fetch all companies
    fetch('http://localhost:8080/tnpbackend/companies')
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error fetching companies:', error));
  }, []);

  useEffect(() => {
    // Fetch shortlisted students for all companies
    fetch('http://localhost:8080/tnpbackend/shortlistedstudents')
      .then((response) => response.json())
      .then((data) => {
        setShortlistedStudents(data);
        const counts = data.reduce((acc, student) => {
          acc[student.companyId] = (acc[student.companyId] || 0) + 1;
          return acc;
        }, {});
        setShortlistCounts(counts);
      })
      .catch((error) => console.error('Error fetching shortlisted students:', error));
  }, []);

  return (
    <div className="viewshortlist-container">
      <h2>View Shortlisted Students</h2>
      {companies.map((company) => (
        <div key={company.companyId} className="company-section">
          <h3>{company.companyName}</h3>
          <div className="shortlist-count">
            <strong>Total Shortlisted Students:</strong> {shortlistCounts[company.companyId] || 0}
          </div>
          <div className="shortlisted-students">
            {shortlistedStudents
              .filter((student) => student.companyId === company.companyId)
              .map((student) => (
                <div key={student.studentId} className="student">
                  <p><strong>Student ID:</strong> {student.studentId}</p>
                  <p><strong>Profile Details:</strong> {student.profileDetails}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewShortlist;
