import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const addTask = (task) => {
    if (editingTask !== null) {
      const updatedTasks = tasks.map((t, index) => 
        index === editingTask ? task : t
      );
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingTask(index);
  };

  return (
    <div className={`App ${showSidebar ? 'sidebar-open' : ''}`}>
      <Navbar bg="dark" variant="dark" className="main-navbar" fixed="top">
        <Container>
          <Button variant="outline-light" onClick={toggleSidebar} className="sidebar-toggle-btn">
            ☰
          </Button>
          <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#header">Header</Nav.Link>
            <Nav.Link href="#taskform">TaskForm</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Sidebar showSidebar={showSidebar} />
      <Container className="content">
        <Header />
        <div className="section-banner">Task Form</div>
        <TaskForm addTask={addTask} editingTask={editingTask !== null ? tasks[editingTask] : null} />
        {tasks.length > 0 && (
          <>
            <div className="section-banner">Task List</div>
            <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
          </>
        )}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
