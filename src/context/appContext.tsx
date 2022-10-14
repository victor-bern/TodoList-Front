import React, { Dispatch } from 'react';
import todoReducer from '../reducers';
import { IAction } from '../types/IAction';
import { ITodo } from '../types/ITodo';
export interface IAppState {
  todoTitle: string;
  todos: ITodo[];
  buttonEnable: boolean;
}

export const initialState: IAppState = {
  todoTitle: '',
  todos: [],
  buttonEnable: true,
};

export interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<IAction>;
}

const AppContext = React.createContext<IAppContext>({
  state: {
    todos: [],
    todoTitle: '',
    buttonEnable: true,
  },
  dispatch: () => {},
});

type Props = {
  children?: React.ReactNode;
};

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    todoReducer,
    initialState as IAppState
  );
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
