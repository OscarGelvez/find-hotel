import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { IRoom } from '../../models/Room';
import { RoomDetail } from './index';

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

const roomId = 50;
afterEach(cleanup);

it('rederizar el componente RoomDetail sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RoomDetail
      listRooms={[newRoom]}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente RoomDetail y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <RoomDetail
      listRooms={[newRoom]}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />
  );
  expect(getByTestId('room-detail')).toContainElement(
    getByTestId('room-detail-view')
  );
});

it('Compara snapshot del componente RoomDetail', () => {
  const element = renderer
    .create(
      <RoomDetail
        listRooms={[newRoom]}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});