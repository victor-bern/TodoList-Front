import axios from '../configs/axiosConfig';
import { ITodo } from '../types/ITodo';

const getAllTodos = async () => {
  const response = await axios.get<ITodo[]>('api/v1/todos');

  return response.data;
};

const saveTodo = async (title: string) => {
  const response = await axios.post<ITodo>('api/v1/todos', {
    title,
  });
  return response.data;
};

const changeStatustodo = async (id: number) => {
  await axios.put(`api/v1/todos/status/${id}`);
};

const deleteTodo = async (id: number) => {
  await axios.delete(`api/v1/todos/delete/${id}`);
};

const editTodo = async (todo: ITodo) =>
  await axios.put(`api/v1/todos/edit/${todo.id}`, todo);

export { getAllTodos, saveTodo, changeStatustodo, deleteTodo, editTodo };
