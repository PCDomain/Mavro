import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { fetchTasks, addTask, deleteTask, updateTask } from './api';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetchTasks()
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleAddTask = (task) => {
    addTask(task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('Error adding task:', error));
  };

  const handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleUpdateTask = (id, updatedTask) => {
    updateTask(id, updatedTask)
      .then(response => {
        const updatedTasks = tasks.map(task => (task.id === id ? response.data : task));
        setTasks(updatedTasks);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Header />
      <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
      <div className="main-container">
        <Sidebar showSidebar={showSidebar} />
        <div className={`content ${showSidebar ? 'expanded' : ''}`}>
          <TaskForm addTask={handleAddTask} />
          <TaskList tasks={tasks} deleteTask={handleDeleteTask} updateTask={handleUpdateTask} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
