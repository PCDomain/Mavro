import React from 'react';
import './TaskList.css';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="tasklist" id="tasklist">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task} - {task.description}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
