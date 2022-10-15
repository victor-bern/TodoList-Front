import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContextProvider } from '../../context/appContext';
import AddButton from './Index';

test('Button should be disabled when load', () => {
  render(
    <AppContextProvider>
      <AddButton />
    </AppContextProvider>
  );

  const button = screen.getByText('Add') as HTMLButtonElement;
  expect(button.disabled).toBe(true);
});

test('Backgroung color of Button should have #808080 when enabled', () => {
  render(
    <AppContextProvider>
      <AddButton />
    </AppContextProvider>
  );

  const button = screen.getByText('Add') as HTMLButtonElement;
  button.disabled = false;
  expect(button).toHaveStyle('background-color:#808080');
});
