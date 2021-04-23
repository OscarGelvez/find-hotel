import { IStateMain } from 'app/core/redux/modelo/IStateMain';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { IStateRooms } from '../../../../core/redux/modelo/IStateRooms';
import { roomInfo } from '../../../../shared/utils/data';
import { IRoom } from '../../models/Room';
import { ManageRooms } from '../ManageRooms';

const mockStore = configureStore([]);

const newRoom: IRoom = roomInfo;
const listRooms: IRoom[] = [newRoom];

const rooms: IStateRooms = {
  listRooms: listRooms,
  selectedRoomId: -1,
};

const main: IStateMain = {
  isLoading: false,
};

describe('Prueba componente de orden superior HOC con redux', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rooms: rooms,
      main,
    });

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ManageRooms />
        </BrowserRouter>
      </Provider>
    );
  });

  it('Compara snapshot del componente ManageRooms renderizado', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
