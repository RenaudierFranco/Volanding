import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { UserContextProvider } from '../../Context/UserContext';
import { db } from '../../Services/Firebase/Firebase';
import FormLogin from './FormLogin';


// Mock de getDocs para simular datos asincrónicos de Firebase
jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  getDocs: jest.fn(() => Promise.resolve({ docs: [] })),
}));

describe('FormLogin Component', () => {
  test('Should log in user with correct credentials', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    render(
      <UserContextProvider>
        <MemoryRouter>
          <FormLogin />
        </MemoryRouter>
      </UserContextProvider>
    );

    // Simulamos el input del usuario y contraseña
    fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
      target: { value: 'password' },
    });

    // Simulamos la respuesta de Firebase (usuario existente)
    jest.spyOn(db, 'getDocs').mockImplementationOnce(() =>
      Promise.resolve({
        docs: [{ id: '1', data: () => ({ email: 'test@example.com', password: 'password' }) }],
      })
    );

    // Hacemos clic en el botón de inicio de sesión
    fireEvent.click(screen.getByText('Iniciar sesión'));

    // Esperamos a que se completen las operaciones asíncronas
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Verificamos que se haya llamado a localStorage.setItem con los datos correctos
    expect(setItemSpy).toHaveBeenCalledWith('user', JSON.stringify({ email: 'test@example.com', password: 'password' }));
  });

  // Puedes agregar más pruebas según sea necesario
});
