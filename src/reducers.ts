import { IAppState } from './context/appContext';
import { IAction } from './types/IAction';

const todoReducer = (state: IAppState, action: IAction): typeof state => {
  switch (action.type) {
    case 'SET_TODO_TITLE':
      return {
        ...state,
        todoTitle: action.todoTitle,
      };
    default:
      throw new Error();
  }
};

export default todoReducer;
