import { Dispatch } from 'react';
import { ActionType, IAction } from '../types/IAction';

const setTodoTitle = (dispatch: Dispatch<IAction>, todoTitle: string) => {
  dispatch({ type: ActionType.SET_TODO_TITLE, todoTitle });
};

const addTodo = (dispatch: Dispatch<IAction>) =>
  dispatch({ type: ActionType.ADD_TODO });

const ButtonDisableOrEnable = (dispatch: Dispatch<IAction>) =>
  dispatch({ type: ActionType.VERIFY_BUTTON });
export { setTodoTitle, addTodo, ButtonDisableOrEnable };
