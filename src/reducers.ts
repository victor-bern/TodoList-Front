import { IAppState } from './context/appContext';
import { IAction } from './types/IAction';

const todoReducer = (state: IAppState, action: IAction): typeof state => {
  switch (action.type) {
    case 'SET_TODO_TITLE':
      return {
        ...state,
        todoTitle: action.todoTitle as string,
      };
    case 'ADD_TODO':
      console.log(state.todos);
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: 1, title: state.todoTitle, isDone: false },
        ],
      };
    case 'VERIFY_BUTTON':
      console.log(state);
      return {
        ...state,
        buttonEnable: state.todoTitle.length > 0 ? false : true,
      };
    default:
      throw new Error();
  }
};

export default todoReducer;
