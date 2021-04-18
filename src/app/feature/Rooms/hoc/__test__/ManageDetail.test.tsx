import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { IStateRooms } from '../../../../core/redux/modelo/IStateRooms';
import { IRoom } from '../../models/Room';

import { ManageDetail } from '../ManageDetail';

const mockStore = configureStore([]);

const newRoom: IRoom = {
  id: 50,
  title: 'Suite full. Caroline',
  image: 'https://static.abc.es/Media/201504/27/hotel12--644x362.jpg',
  hotel: {
    id: 1,
    name: 'Gold Hotel 5',
    address: 'Calle 54 # 56 -32 Av Libre',
    stars: 4,
    description:
      'Hotel con ambiente familiar, increible opción. Muchas comodidades',
    score: 8.7,
  },
  value: '154.000',
  ac: 'Y',
  parking: 'Y',
  available_from: '2021-04-13',
  available_until: '2021-04-30',
  wifi: 'Y',
  capacity: 1,
  description: 'Baño privado, cama doble, con nevera, Wifi, TV.',
};
const listRooms: IRoom[] = [newRoom];

const rooms: IStateRooms = {
  listRooms: listRooms,
  selectedRoomId: 50,
};

describe('Prueba componente de orden superior HOC con redux', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rooms: rooms,
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

  //   it('should dispatch an action on button click', () => {});
});
