import React, { useState, useEffect } from 'react';
import './TaskForm.css';

function TaskForm({ addTask, editingTask }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.task);
      setDescription(editingTask.description);
    } else {
      setTask('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task, description });
    setTask('');
    setDescription('');
  };

  return (
    <div className="taskform" id="taskform">
      <h2>{editingTask ? 'Edit Task' : 'Task Form'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
}

export default TaskForm;
