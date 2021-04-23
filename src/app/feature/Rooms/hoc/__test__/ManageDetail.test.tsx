import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { IStateRooms } from '../../../../core/redux/modelo/IStateRooms';
import { roomInfo } from '../../../../shared/utils/data';
import { IRoom } from '../../models/Room';
import { ManageDetail } from '../ManageDetail';

const mockStore = configureStore([]);

const newRoom: IRoom = roomInfo;
const listRooms: IRoom[] = [newRoom];

const rooms: IStateRooms = {
  listRooms: listRooms,
  selectedRoomId: 50,
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
        <ManageDetail />
      </Provider>
    );
  });

  it('Compara snapshot del componente ManageDetail renderizado', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
