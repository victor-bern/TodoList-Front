import { render } from '@testing-library/react';
import React from 'react';
import TodoList from '.';
import { AppContextProvider } from '../../context/appContext';
import { ITodo } from '../../types/ITodo';

const todosMock: ITodo[] = [
  {
    id: 1,
    title: 'Todo 1',
    isDone: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    isDone: true,
  },
];

test('should render a list with 2 childrens', async () => {
  const { container } = render(
    <AppContextProvider>
      <TodoList todos={todosMock} />
    </AppContextProvider>
  );

  expect(container.childNodes).toHaveLength(2);
});
