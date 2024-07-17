// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask, updateTask } from '../api'; // Use '../api' to navigate up one directory level
import { ListGroup, ListGroupItem, Button } from 'reactstrap'; // Import from reactstrap

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasksFromAPI = () => {
    fetchTasks()
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  };

  useEffect(() => {
    fetchTasksFromAPI();
  }, []);

  const handleDelete = (taskId) => {
    deleteTask(taskId)
      .then(() => {
        fetchTasksFromAPI(); // Fetch updated tasks list after deleting a task
      })
      .catch(error => {
        console.error('There was an error deleting the task!', error);
      });
  };

  const handleToggleComplete = (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    updateTask(task.id, updatedTask)
      .then(() => {
        fetchTasksFromAPI(); // Fetch updated tasks list after updating a task
      })
      .catch(error => {
        console.error('There was an error updating the task!', error);
      });
  };

  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroupItem key={task.id}>
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            />
            {task.name}
            <Button color="danger" onClick={() => handleDelete(task.id)}>
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TaskList;
