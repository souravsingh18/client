import axios from "axios";

const API = "http://localhost:5001/courses";

export const getCounts = () => axios.get(`${API}/getCounts`);

export const getAll = () => axios.get(`${API}/getAll`);
