// src/api/taskService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks/';

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// Define the deleteTask function
export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}${taskId}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

// Add more functions as needed...
export const updateTask = async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  };
  