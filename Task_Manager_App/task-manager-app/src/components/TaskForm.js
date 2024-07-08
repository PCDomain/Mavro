import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setCompleted(taskToEdit.completed);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask({ ...taskToEdit, title, description, completed });
    } else {
      addTask({ title, description, completed });
    }
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTaskTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formTaskDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formTaskCompleted">
        <Form.Check
          type="checkbox"
          label="Completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </Button>
    </Form>
  );
};

export default TaskForm;
