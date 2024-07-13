import React from 'react';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const handleUpdate = (id) => {
    const updatedTitle = prompt("Enter the new title:");
    if (updatedTitle) {
      updateTask(id, { title: updatedTitle });
    }
  };

  return (
    <div className="task-list">
      <div className="banner">Task List</div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul style={{ width: '100%' }}>
          {tasks.map(task => (
            <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
              {task.title}
              <div>
                <button onClick={() => handleUpdate(task.id)}>Update</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
