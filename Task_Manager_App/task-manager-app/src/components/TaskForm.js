import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask({ title: '' });
    }
  };

  return (
    <div className="task-form">
      <div className="banner">Add Task</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Enter a new task"
          style={{ width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <button type="submit" style={{ width: '100%' }}>Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
