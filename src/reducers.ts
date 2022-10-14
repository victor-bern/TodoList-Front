import { IAppState } from './context/appContext';
import { IAction } from './types/IAction';
import { ITodo } from './types/ITodo';

const todoReducer = (state: IAppState, action: IAction): typeof state => {
  switch (action.type) {
    case 'SET_TODO_TITLE':
      return {
        ...state,
        todoTitle: action.todoTitle as string,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo as ITodo],
      };
    case 'VERIFY_BUTTON':
      return {
        ...state,
        buttonEnable: state.todoTitle.length > 0 ? false : true,
      };
    case 'FETCH_TODOS':
      return {
        ...state,
        todos: [...(action.todos as ITodo[])],
      };
    default:
      throw new Error();
  }
};

export default todoReducer;
