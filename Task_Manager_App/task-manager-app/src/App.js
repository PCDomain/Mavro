import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const startEditTask = (task) => {
    setTaskToEdit(task);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
          </Col>
          <Col md={6}>
            <TaskList tasks={tasks} startEditTask={startEditTask} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
