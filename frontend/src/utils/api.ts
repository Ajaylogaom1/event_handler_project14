import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL

export const login = async (credentials: { email: string; password: string }) => {
    return await axios.post(`${API_URL}/auth/login`, credentials);
};

export const register = async (userData: { email: string; password: string }) => {
    return await axios.post(`${API_URL}/auth/register`, userData);
};


export const fetchAvailability = async () => {
    return await axios.get(`${API_URL}/availability`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const createAvailability = async (data: { start: Date; end: Date; duration: number }) => {
    return await axios.post(`${API_URL}/availability`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const fetchSessions = async () => {
    return await axios.get(`${API_URL}/sessions`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const createSession = async (data: { start: Date; end: Date; attendees: Array<{ name: string; email: string }> }) => {
    return await axios.post(`${API_URL}/sessions`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};