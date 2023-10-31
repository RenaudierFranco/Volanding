import React from 'react';
import { render } from '@testing-library/react';
import { UserContextProvider } from '../../Context/UserContext';
import Item from './Item';

const customRender = (ui, options) => {
  return render(<UserContextProvider {...options}>{ui}</UserContextProvider>);
};

test('renders Item component', () => {
  const item = {
    id: 1,
    departure: 'City A',
    arrival: 'City B',
    date: '2023-11-01',
    time: '12:00 PM',
    price: 100,
    plane: 'Plane A',
    seat: 50,
  };

  const { getByText } = customRender(<Item item={item} />);

  // Realiza las aserciones que correspondan a tu componente Item
  expect(getByText(/Origen:/i)).toBeInTheDocument();
  expect(getByText(/Destino:/i)).toBeInTheDocument();
  expect(getByText(/Fecha:/i)).toBeInTheDocument();
  expect(getByText(/Horario:/i)).toBeInTheDocument();
  expect(getByText(/U\$S 100.00/i)).toBeInTheDocument();
  expect(getByText(/Avión: Plane A \/ Plazas disponibles: 50/i)).toBeInTheDocument();
  // ... otras aserciones
});
