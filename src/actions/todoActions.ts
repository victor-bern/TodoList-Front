import { Dispatch } from 'react';
import { ActionType, IAction } from '../types/IAction';

const setTodoTitle = (dispatch: Dispatch<IAction>, todoTitle: string) => {
  dispatch({ type: ActionType.SET_TODO_TITLE, todoTitle });
};

export { setTodoTitle };
