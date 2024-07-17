import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks/');
            setTasks(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await axios.post('/api/tasks/', task);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`/api/tasks/${taskId}/`);
            setTasks(tasks.filter((task) => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const updateTask = async (taskId, updatedTask) => {
        try {
            const response = await axios.put(`/api/tasks/${taskId}/`, updatedTask);
            setTasks(tasks.map((task) => (task.id === taskId ? response.data : task)));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div className="home">
            <TaskForm addTask={addTask} />
            {loading ? (
                <p>Loading tasks...</p>
            ) : (
                <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
            )}
        </div>
    );
};

export default Home;
