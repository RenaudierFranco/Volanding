import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserContextProvider from './Context/UserContext';
import App from './App';

test('renders without crashing', () => {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </MemoryRouter>
  );
});
