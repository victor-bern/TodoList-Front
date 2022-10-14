import axios from '../configs/axiosConfig';
import { ITodo } from '../types/ITodo';

const getAllTodos = async () => {
  const response = await axios.get<ITodo[]>('api/v1/todos');

  return response.data;
};

export { getAllTodos };
