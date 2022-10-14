import { ITodo } from './ITodo';

export enum ActionType {
  SET_TODO_TITLE = 'SET_TODO_TITLE',
  FETCH_VEHICLES = 'FETCH_VEHICLES',
  SELECT_ALL = 'SELECT_ALL',
  SELECT_NONE = 'SELECT_NONE',
  ADD_VEHICLE = 'ADD_VEHICLE',
  REMOVE_VEHICLE = 'REMOVE_VEHICLE',
  SELECT_LAST_VEHICLE = 'SELECT_LAST_VEHICLE',
}

export type IAction = {
  type: ActionType;
  todo?: ITodo;
  todoTitle: string;
};
