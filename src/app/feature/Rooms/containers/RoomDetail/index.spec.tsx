import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { roomInfo } from '../../../../shared/utils/data';
import { IRoom } from '../../models/Room';
import { RoomDetail } from './index';

const newRoom: IRoom = roomInfo;

const roomId = 50;
afterEach(cleanup);

it('rederizar el componente RoomDetail sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RoomDetail
      listRooms={[newRoom]}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
      isLoading={false}
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
      isLoading={false}
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
        isLoading={false}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
