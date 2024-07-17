import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

export const addTask = async (task) => {
    try {
        const response = await api.post('tasks/create/', task);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

export const addTask = async (task) => {
    return await axios.post(API_URL, task);
};

export const updateTask = async (id, task) => {
    return await axios.put(`${API_URL}${id}/`, task);
};

export const deleteTask = async (id) => {
    return await axios.delete(`${API_URL}${id}/`);
};
