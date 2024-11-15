import React from 'react';
//import { Link } from 'react-router-dom';
import './Home2.css';

function Home2() {
  return (
    <div>
      <div className="marquee-container">
    <marquee className="marquee-text">Cummins College T&P Cell</marquee>
  </div>
    <div className="homepage">
    <div className="content">
      <div className="content-box">
      
        <h1>Welcome to Our Placement Portal</h1>
        <p>Your future starts here</p>
      </div>
    </div>
    <div></div>
      </div>
      <div className="content-container">
      <div className="description">
    <p>
      The training & placement cell is the nodal center and an integral part of the institution. 
      Started in 1995, it has scaled to great heights and touched a mark of more than 90% placements since its inception.
      The cell has very active collaborations with industry.
      The cell helps the students in pursuing their career interests and also, grooms and shapes the students to make 
      them industry-ready by imparting necessary skills and training.
      More than 150 reputed National and Multinational companies visit our institution for campus recruitments annually.
      The cell also imparts value-added services like Hackathons, Resume Writing, Personal Interviews, Mock tests, 
      Team building activities as a part of the pre-placement training.
      The cell has a state-of-the-art infrastructure for its effective functioning and makes the best of arrangements 
      required by the company officials during placement visits.
      Our skilled and dedicated staff always tries to deliver precisely planned services to the student community and our recruiters.
    </p>
  </div>
  <div className="above-homepage">
    <img src="\assets\Placement-process-chart.jpg" alt="Description of image" className="above-homepage-image" />
  </div>
  </div>
      <div className="below-homepage">
    <img src="\assets\list.jpg" alt="Description of image" className="below-homepage-image" />
  </div>
      </div>
  );
}

export default Home2;