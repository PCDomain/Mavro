import React from 'react';
import './Sidebar.css';

function Sidebar({ showSidebar }) {
  return (
    <div className={`sidebar ${showSidebar ? 'open' : ''}`}>
      <h2>Navigation</h2>
      <ul>
        <li><a href="#header">Header</a></li>
        <li><a href="#taskform">TaskForm</a></li>
        <li><a href="#footer">Footer</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
