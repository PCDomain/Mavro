import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const TaskList = ({ tasks, startEditTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Card key={task.id} style={{ marginBottom: '10px' }}>
          <Card.Body>
            <Form.Check
              type="checkbox"
              label={task.title}
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <Card.Text>{task.description}</Card.Text>
            <Button variant="primary" onClick={() => startEditTask(task)}>Edit</Button>
            <Button variant="danger" style={{ marginLeft: '10px' }} onClick={() => deleteTask(task.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
