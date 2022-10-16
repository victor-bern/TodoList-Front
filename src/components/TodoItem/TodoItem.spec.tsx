import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppContextProvider } from '../../context/appContext';
import { ITodo } from '../../types/ITodo';
import TodoItem from './Index';
const todoMock: ITodo = {
  id: 1,
  title: 'todo test',
  isDone: false,
};
test('Should load values passed by props', () => {
  render(
    <AppContextProvider>
      <TodoItem todo={todoMock} />
    </AppContextProvider>
  );

  const title = screen.getByText(todoMock.title);
  const checkBox = screen.getByRole('checkbox');

  expect(title).toBeVisible();
  expect(checkBox).toBeVisible();
});

test('icon should to be visible if todo is done', async () => {
  todoMock.isDone = true;
  render(
    <AppContextProvider>
      <TodoItem todo={todoMock} />
    </AppContextProvider>
  );

  const icon = screen.getByRole('img');

  expect(icon).toBeVisible();
});
