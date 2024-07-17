import React, { useState } from 'react';
import { addTask } from './api';

const TaskForm = () => {
    const [task, setTask] = useState({ name: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTask(task);
            alert('Task created successfully');
        } catch (error) {
            alert('There was an error creating the task!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task.name}
                onChange={(e) => setTask({ ...task, name: e.target.value })}
                placeholder="Task name"
            />
            <textarea
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                placeholder="Task description"
            ></textarea>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
