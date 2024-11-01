import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000', // Substitua pelo endereço do seu servidor
});

export default api;