// BrokerDashboard.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PropertyForm from './PropertyForm';
import PropertyDashboard from './PropertyDashboard';
import '../BrokerDashboard/BrokerDashboard.css'; // Import CSS file for styling



const BrokerDashboard = () => {
    const [view, setView] = useState('info');
    const navigate = useNavigate(); // Initialize useNavigate hook
  
    
    const handleLogout = () => {
        // Redirect to login page after logout
        navigate('/login'); // Navigate to login page
    };
  
  
    return (
      <div className="broker-dashboard">
        <div className="sidebar">
          <div className="sidebar-header">
            <h3>Menu</h3>
          </div>
          <ul className="sidebar-menu">
            <li className={`sidebar-menu-item ${view === 'addProperty' ? 'active' : ''}`} onClick={() => setView('addProperty')}>Add Property</li>
            <li className={`sidebar-menu-item ${view === 'propertyList' ? 'active' : ''}`} onClick={() => setView('propertyList')}>Property List</li>
            <li className={`sidebar-menu-item ${view === 'likedProperties' ? 'active' : ''}`} onClick={() => setView('likedProperties')}>Liked Properties</li>
            <li className="sidebar-menu-item logout" onClick={handleLogout}>Logout</li> {/* Add logout class */}
          </ul>
        </div>
        <div className="dashboard-content">
          {view === 'addProperty' && <PropertyForm />}
          {view === 'propertyList' && <PropertyDashboard />}
        </div>
      </div>
    );
};

export default BrokerDashboard;