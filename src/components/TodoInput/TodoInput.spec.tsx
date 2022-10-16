import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppContextProvider } from '../../context/appContext';
import TodoInput from './Index';

test('Input should change your value when user type', () => {
  render(
    <AppContextProvider>
      <TodoInput />
    </AppContextProvider>
  );
  const value = 'Test';
  const input = screen.getByRole('textbox') as HTMLInputElement;
  fireEvent.change(input, { target: { value } });

  expect(input.value).toBe(value);
});
