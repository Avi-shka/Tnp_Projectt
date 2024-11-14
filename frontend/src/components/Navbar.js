import React, { useState } from 'react';
import { Link , useLocation, useNavigate} from 'react-router-dom';
import './nav.css';

function Navbar({ isLoggedIn, handleLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleExternalLink = (url) => {
    window.location.href = url;
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const location = useLocation();
   const navigate = useNavigate();

    const { userId, stuId, message } = location.state || {};
   
    const handleViewSchedule = () => {
       navigate('/viewschedule', { state: { userId } }); };
       
    const handleCreateSchedule = () => { 
      navigate('/schedule', { state: { userId } }); };

      const handleaddcompany = () => { 
        navigate('/compjd', { state: { userId , message} }); };

      const handleUpdateSchedule = () => { 
        navigate('/updateschedule', { state: { userId } }); };

     const handleViewProfile = () => { 
      if (stuId && stuId !== 0)
         { navigate('/stuprofiles', { state: { userId, stuId } }); } 
      else if(message === 'Login successful' && stuId === 0){ navigate('/stuprofile', { state: { userId } }); }
      else{ navigate('/aboutus')}
     };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="C:\Users\nvs20\Desktop\JFST\reactunit3\typroject1\my-app\public\assets\logo .png" alt="Logo" />
      </div>

      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Menu
        </button>
        {dropdownOpen && (
          <ul className="dropdown-content">
            <li><Link to="/">Home</Link></li>
            {isLoggedIn ? (
              <>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>

              <li>
                <button onClick={handleViewProfile}>View Profile</button>
              </li>
              <li>
                 <button onClick={handleViewSchedule}>View Schedule</button>
              </li> 

              {message === 'Admin roleLogin successful' && ( <><li> <button onClick={handleCreateSchedule}>Create Schedule</button> </li>
                <li> <button onClick={handleUpdateSchedule}>Update Schedule</button> </li>
                <li> <button onClick={handleaddcompany}>Add Company JD</button> </li> </>
                )}
             
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
            <button onClick={() => handleExternalLink("https://cumminscollege.org/placements/placement-statistics/")}>
              Placement Statistics
            </button>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
