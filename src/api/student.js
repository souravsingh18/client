import axios from "axios";

const API = "http://localhost:5001/students";

export const getCounts = () => axios.get(`${API}/getCounts`);

export const getAll = () => axios.get(`${API}/getAll`);

export const getStudent = (id) => axios.get(`${API}/getDetails/${id}`);

export const deleteStudent = (id) => axios.delete(`${API}/deleteOne/${id}`);

export const postStudent = () => axios.post(`${API}/post/`);

export const updateStudent = (id) => axios.patch(`${API}/post/${id}`);

export const studentDetails = (id) => axios.get(`${API}/getDetails/${id}`);
