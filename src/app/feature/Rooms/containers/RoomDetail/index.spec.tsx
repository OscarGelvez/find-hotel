import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <RoomDetail
        listRooms={[newRoom]}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
        isLoading={false}
        errorMessage={{ message: '', type: '' }}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente RoomDetail y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <RoomDetail
        listRooms={[newRoom]}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
        isLoading={false}
        errorMessage={{ message: '', type: '' }}
      />
    </BrowserRouter>
  );
  expect(getByTestId('room-detail')).toContainElement(
    getByTestId('room-detail-view')
  );
});

it('Compara snapshot del componente RoomDetail', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <RoomDetail
          listRooms={[newRoom]}
          selectedRoom={roomId}
          saveBookingRoom={() => null}
          isLoading={false}
          errorMessage={{ message: '', type: '' }}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
