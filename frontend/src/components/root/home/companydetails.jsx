import React from 'react';
import { useLocation } from 'react-router-dom';
import './companydetails.css';

function CompanyDetails() {
  const location = useLocation();
  const { company, userId, stuId } = location.state || {};

  if (!company) {
    return <div>No company details available.</div>;
  }

  return (
    <div className="company-details">
      <h2>{company.companyName}</h2>
      <p><strong>Contact Person:</strong> {company.contactPerson}</p>
      <p><strong>Contact Email:</strong> {company.contactEmail}</p>
      <p><strong>Details:</strong> {company.details}</p>
      <p><strong>Stipend:</strong> {company.stipend}</p>
      <p><strong>Location:</strong> {company.location}</p>
      <p><strong>Schedule Date:</strong> {company.scheduleDate}</p>
      <p><strong>Eligible Branches:</strong> {company.eligibleBranches}</p>
      {company.googleFormLink && (
        <p>
          <strong>Google Form Link:</strong>{' '}
          <a href={company.googleFormLink} target="_blank" rel="noopener noreferrer">
            Click here to open the form
          </a>
        </p>
      )}
    </div>
  );
}

export default CompanyDetails;
