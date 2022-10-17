import { Dispatch } from 'react';
import { ActionType, IAction } from '../types/IAction';
import { ITodo } from '../types/ITodo';

const setTodoTitle = (dispatch: Dispatch<IAction>, todoTitle: string) => {
  dispatch({ type: ActionType.SET_TODO_TITLE, todoTitle });
};

const addTodo = (dispatch: Dispatch<IAction>, todo: ITodo) =>
  dispatch({ type: ActionType.ADD_TODO, todo });

const buttonDisableOrEnable = (dispatch: Dispatch<IAction>) =>
  dispatch({ type: ActionType.VERIFY_BUTTON });

const fecthTodos = (dispatch: Dispatch<IAction>, todos: ITodo[]) =>
  dispatch({ type: ActionType.FETCH_TODOS, todos });

const cleanTodoInput = (dispatch: Dispatch<IAction>) =>
  dispatch({ type: ActionType.CLEAN_TODO_INPUT });

const removeTodo = (dispatch: Dispatch<IAction>, todo: ITodo) =>
  dispatch({ type: ActionType.DELETE_TODO, todo });

const editTodoTitle = (dispatch: Dispatch<IAction>, todo: ITodo) =>
  dispatch({ type: ActionType.EDIT_TODO_TITLE, todo });

export {
  setTodoTitle,
  addTodo,
  buttonDisableOrEnable,
  fecthTodos,
  cleanTodoInput,
  removeTodo,
  editTodoTitle,
};
