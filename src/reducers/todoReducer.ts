import { IAppState } from '../context/appContext';
import { IAction } from '../types/IAction';
import { ITodo } from '../types/ITodo';

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
    case 'CLEAN_TODO_INPUT':
      return {
        ...state,
        todoTitle: '',
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter((item) => item !== action.todo)],
      };
    case 'EDIT_TODO_TITLE':
      var indexOf = state.todos.findIndex(
        (item) => item.id === action.todo?.id
      );
      state.todos[indexOf].title = action.todo?.title!;

      return {
        ...state,
        todos: [...state.todos],
      };
    default:
      return {
        ...state,
      };
  }
};

export default todoReducer;
