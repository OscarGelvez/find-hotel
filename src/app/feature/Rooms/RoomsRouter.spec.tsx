import { IStateRooms } from '../../core/redux/modelo/IStateRooms';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { RoomsRouter } from './RoomsRouter';
import { IRoom } from './models/Room';
const mockStore = configureStore([]);
import { IStateMain } from '../../core/redux/modelo/IStateMain';

import { roomInfo } from '../../shared/utils/data';
import renderer from 'react-test-renderer';

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

test('Prueba a componente Router', () => {
  store = mockStore({
    rooms,
    main,
  });

  const element = renderer
    .create(
      <Provider store={store}>
        <Router history={history}>
          <RoomsRouter />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
