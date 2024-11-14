import React, { useState, useEffect } from 'react';
import './viewschedule.css';

function ViewSchedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/tnpbackend/viewschedule')
      .then((response) => response.json())
      .then((data) => setSchedules(data))
      .catch((error) => console.error('Error fetching schedules:', error));
  }, []);

  return (
    <div className="container">
      <h2>Upcoming Schedules</h2>
      <div className="schedule-list">
        {schedules.map((schedule) => (
          <div key={schedule.schedule_id} className="schedule-item">
            <h3>{schedule.event}</h3>
            <p><strong>Date:</strong> {schedule.scheduleDate || 'TBD'}</p>
            <p><strong>Time:</strong> {schedule.scheduleTime || 'TBD'}</p>
            <p><strong>Venue:</strong> {schedule.venue}</p>
            <p><strong>Company:</strong> {schedule.companyName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSchedule;
