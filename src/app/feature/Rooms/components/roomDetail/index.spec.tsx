import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <RoomDetailView
        listRooms={[newRoom]}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
        isLoading={false}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente RoomDetailView y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <RoomDetailView
        listRooms={[newRoom]}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
        isLoading={false}
      />
    </BrowserRouter>
  );
  expect(getByTestId('room-detail-view')).toContainElement(
    getByTestId('card-information')
  );
});

it('Compara snapshot del componente RoomDetailView', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <RoomDetailView
          listRooms={[newRoom]}
          selectedRoom={roomId}
          saveBookingRoom={() => null}
          isLoading={false}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
