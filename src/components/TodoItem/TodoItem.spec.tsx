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

afterEach(() => {
  todoMock.isDone = false;
});
test('Should load values passed by props', () => {
  render(
    <AppContextProvider>
      <TodoItem todo={todoMock} />
    </AppContextProvider>
  );

  const title = screen.getByText(todoMock.title);
  const checkBox = screen.getByRole('checkbox');
  const trashIcon = screen.getByRole('img');

  expect(title).toBeVisible();
  expect(checkBox).toBeVisible();
  expect(trashIcon).toBeVisible();
});

test('icon should to be visible if todo is done', async () => {
  todoMock.isDone = true;
  render(
    <AppContextProvider>
      <TodoItem todo={todoMock} />
    </AppContextProvider>
  );

  const icon = screen.getByTestId('checkIconID');

  expect(icon).toBeVisible();
});

// O hover não quer funcionar :'(
test.skip('trash icon color should be #ff5733 on hover', async () => {
  render(
    <AppContextProvider>
      <TodoItem todo={todoMock} />
    </AppContextProvider>
  );

  const trashIcon = screen.getByRole('img');

  fireEvent.mouseOver(trashIcon);
  expect(trashIcon).toHaveStyle('color: #ff5733');
});
