import { ITodo } from './ITodo';

export enum ActionType {
  SET_TODO_TITLE = 'SET_TODO_TITLE',
  ADD_TODO = 'ADD_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
  VERIFY_BUTTON = 'VERIFY_BUTTON',
  CLEAN_TODO_INPUT = 'CLEAN_TODO_INPUT',
  DELETE_TODO = 'DELETE_TODO',
  NONE = 'NONE',
}

export type IAction = {
  type: ActionType;
  todo?: ITodo;
  todos?: ITodo[];
  todoTitle?: string;
};
