import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputDate from './InputDate';
test('InputDate component renders correctly', () => {
  render(<InputDate />);

  // Check if the component renders without crashing
  expect(screen.getByText('Buscar vuelo✈️')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Origen')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Destino')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Partida')).toBeInTheDocument();
  expect(screen.getByText('Buscar')).toBeInTheDocument();
});

test('Search flight button calls the correct function with the correct data', () => {
  const sendDataMock = jest.fn();
  render(<InputDate sendData={sendDataMock} />);

  // Mock user input
  fireEvent.change(screen.getByPlaceholderText('Origen'), { target: { value: 'City1' } });
  fireEvent.change(screen.getByPlaceholderText('Destino'), { target: { value: 'City2' } });
  fireEvent.change(screen.getByPlaceholderText('Partida'), { target: { value: '2023-11-07' } });

  // Trigger the search button click
  fireEvent.click(screen.getByText('Buscar'));

  // Check if the function is called with the correct data
  expect(sendDataMock).toHaveBeenCalledWith([
    { id: '1', departure: 'City1', arrival: 'City2', date: '2023-11-07' },
    // Add more test data as needed based on your implementation
  ]);
});
