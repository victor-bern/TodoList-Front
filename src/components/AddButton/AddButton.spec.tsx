import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import baseConfig from '../../configs/axiosConfig';
import { AppContextProvider } from '../../context/appContext';
import AddButton from './Index';
import axios from 'axios';

jest.mock('axios');
const apiMocked = axios as jest.Mocked<typeof axios>;

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
