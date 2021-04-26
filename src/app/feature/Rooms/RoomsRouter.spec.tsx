import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { IStateRooms } from '../../core/redux/modelo/IStateRooms';
import { IRoom } from './models/Room';
import { RoomsRouter } from './RoomsRouter';
const mockStore = configureStore([]);

import { IStateMain } from '../../core/redux/modelo/IStateMain';
import { roomInfo } from '../../shared/utils/data';

const newRoom: IRoom = roomInfo;
const listRooms: IRoom[] = [newRoom];

const rooms: IStateRooms = {
  listRooms,
  selectedRoomId: -1,
};

const main: IStateMain = {
  isLoading: false,
  errorMessage: { message: '', type: '' },
};
let store;
const history = createMemoryHistory();

test('Prueba a componente Router vista Rooms', () => {
  store = mockStore({
    rooms,
    main,
  });
  render(
    <Provider store={store}>
      <Router history={history}>
        <MemoryRouter initialEntries={['/rooms']}>
          <RoomsRouter />
        </MemoryRouter>
      </Router>
    </Provider>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Cargando página.../i)).toBeInTheDocument();
});

test('Prueba a componente Router vista RoomsDetails', () => {
  store = mockStore({
    rooms,
    main,
  });
  render(
    <Provider store={store}>
      <Router history={history}>
        <MemoryRouter initialEntries={['/rooms/detail']}>
          <RoomsRouter />
        </MemoryRouter>
      </Router>
    </Provider>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Cargando página.../i)).toBeInTheDocument();
});
