import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { roomInfo } from '../../../../shared/utils/data';
import { IRoom } from '../../models/Room';
import { RoomDetailView } from './index';

const newRoom: IRoom = roomInfo;

const roomId = 50;
afterEach(cleanup);

it('rederizar el componente RoomDetailView sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RoomDetailView
      listRooms={[newRoom]}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente RoomDetailView y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <RoomDetailView
      listRooms={[newRoom]}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />
  );
  expect(getByTestId('room-detail-view')).toContainElement(
    getByTestId('card-information')
  );
});

it('Compara snapshot del componente RoomDetailView', () => {
  const element = renderer
    .create(
      <RoomDetailView
        listRooms={[newRoom]}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
