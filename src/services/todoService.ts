import axios from '../configs/axiosConfig';
import { ITodo } from '../types/ITodo';

const getAllTodos = async () => {
  const response = await axios.get<ITodo[]>('api/v1/todos');

  return response.data;
};

const SaveTodo = async (title: string) => {
  const response = await axios.post<ITodo>('api/v1/todos', {
    title,
  });
  return response.data;
};

export { getAllTodos, SaveTodo };
