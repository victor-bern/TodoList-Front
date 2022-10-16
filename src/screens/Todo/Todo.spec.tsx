import { render, screen } from '@testing-library/react';
import React from 'react';
import Todo from '.';
import baseConfig from '../../configs/axiosConfig';
import { AppContextProvider } from '../../context/appContext';

test('should call useEffect and getAllTodos on load', async () => {
  const useEffectSpy = jest.spyOn(React, 'useEffect');
  const getAllTodosSpy = jest.spyOn(baseConfig, 'get').mockResolvedValue(() => {
    Promise.resolve({
      data: {
        id: 1,
        title: 'Teste',
        isDone: false,
      },
    });
  });

  render(
    <AppContextProvider>
      <Todo />
    </AppContextProvider>
  );

  screen.findByRole('checkbox');

  expect(useEffectSpy).toBeCalled();
  expect(getAllTodosSpy).toBeCalled();
});
