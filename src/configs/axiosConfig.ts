import axios from 'axios';

var baseConfig = axios.create({
  baseURL: 'https://localhost:7203/',
});

export default baseConfig;
