import React from 'react';

const Sidebar = ({ showSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <ul>
        <li>Current Projects</li>
        <li>Recent Projects</li>
        <li>Deleted Projects</li>
        <li>Add Notes</li>
        <li>Progress</li>
      </ul>
    </div>
  );
};

export default Sidebar;
