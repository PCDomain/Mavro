// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/tasks/';

export const fetchTasks = () => {
  return axios.get(API_URL);
};

export const addTask = (task) => {
  return axios.post('/api/tasks/', task, {
    headers: {
        'Content-Type': 'application/json'
    }
  });
};

export const updateTask = (taskId, task) => {
  return axios.put(`${API_URL}${taskId}/`, task);
};

export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}${taskId}/`);
};
