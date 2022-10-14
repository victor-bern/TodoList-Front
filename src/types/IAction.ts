import { ITodo } from './ITodo';

export enum ActionType {
  SET_TODO_TITLE = 'SET_TODO_TITLE',
  ADD_TODO = 'ADD_TODO',
  VERIFY_BUTTON = 'VERIFY_BUTTON',
}

export type IAction = {
  type: ActionType;
  todo?: ITodo;
  todoTitle?: string;
};
