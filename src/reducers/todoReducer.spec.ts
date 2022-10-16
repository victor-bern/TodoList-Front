import { IAppState } from '../context/appContext';
import { ActionType, IAction } from '../types/IAction';
import { ITodo } from '../types/ITodo';
import todoReducer from './todoReducer';

describe('TodoReducer', () => {
  it('Should handle initial state', () => {
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [],
      todoTitle: '',
    };

    const action: IAction = { type: ActionType.NONE };
    expect(todoReducer(initialState, action)).toEqual(initialState);
  });

  it('Should add Todos', () => {
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [],
      todoTitle: '',
    };

    const todoList: ITodo[] = [
      { id: 1, title: 'Todo1', isDone: true },
      { id: 2, title: 'Todo2', isDone: false },
    ];
    const action: IAction = { type: ActionType.FETCH_TODOS, todos: todoList };
    const expectedResult: IAppState = { ...initialState, todos: todoList };

    expect(todoReducer(initialState, action)).toEqual(expectedResult);
  });

  it('should add todo to list', () => {
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [],
      todoTitle: '',
    };
    const todo: ITodo = {
      id: 3,
      title: 'Title 3',
      isDone: false,
    };
    const action: IAction = {
      type: ActionType.ADD_TODO,
      todo,
    };

    const expectedResult: IAppState = {
      ...initialState,
      todos: [todo],
    };

    expect(todoReducer(initialState, action)).toEqual(expectedResult);
  });
  it('Verify button should change button enable status to true when todo title is empty', () => {
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [],
      todoTitle: '',
    };
    const action: IAction = {
      type: ActionType.VERIFY_BUTTON,
    };

    const expectedResult: IAppState = {
      ...initialState,
      buttonEnable: true,
    };

    expect(todoReducer(initialState, action)).toEqual(expectedResult);
  });

  it('Should change todoTitle', () => {
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [],
      todoTitle: '',
    };
    const action: IAction = {
      type: ActionType.SET_TODO_TITLE,
      todoTitle: 'Teste',
    };
    const expectedResult: IAppState = {
      ...initialState,
      todoTitle: 'Teste',
    };

    expect(todoReducer(initialState, action)).toEqual(expectedResult);
  });

  it('Verify button should change button enable status to false when todo title is not empty', () => {
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [],
      todoTitle: 'Title',
    };
    const action: IAction = {
      type: ActionType.VERIFY_BUTTON,
    };

    const expectedResult: IAppState = {
      ...initialState,
    };

    expect(todoReducer(initialState, action)).toEqual(expectedResult);
  });

  it('Should clean TodoTitle', () => {
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [],
      todoTitle: 'Title',
    };
    const action: IAction = {
      type: ActionType.CLEAN_TODO_INPUT,
    };

    const expectedResult: IAppState = {
      ...initialState,
      todoTitle: '',
    };

    expect(todoReducer(initialState, action)).toEqual(expectedResult);
  });

  it('Should delete todo from list', () => {
    const todo: ITodo = { id: 1, title: 'Teste1', isDone: false };
    const initialState: IAppState = {
      buttonEnable: false,
      todos: [todo],
      todoTitle: 'Title',
    };
    const action: IAction = {
      type: ActionType.DELETE_TODO,
      todo,
    };

    const expectedResult: IAppState = { ...initialState, todos: [] };
    expect(todoReducer(initialState, action)).toEqual(expectedResult);
  });
});
