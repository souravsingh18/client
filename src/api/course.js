import axios from "axios";

const API = 'http://localhost:3001/courses'

export const getCounts = ()=> axios.get(`${API}/getCounts`)

export const getAll = ()=> axios.get(`${API}/getAll`)
