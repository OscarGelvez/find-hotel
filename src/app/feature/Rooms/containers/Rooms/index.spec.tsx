import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { roomInfo } from '../../../../shared/utils/data';
import { IRoom } from '../../models/Room';
import { Rooms } from './index';

const newRoom: IRoom = roomInfo;

afterEach(cleanup);

it('rederizar el componente Rooms sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Rooms
        listRooms={[newRoom]}
        listAvailableRooms={() => null}
        findRoomsFilter={() => null}
        loadDetailRoom={() => null}
        isLoading={false}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente Rooms y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Rooms
        listRooms={[newRoom]}
        listAvailableRooms={() => null}
        findRoomsFilter={() => null}
        loadDetailRoom={() => null}
        isLoading={false}
      />
    </BrowserRouter>
  );
  expect(getByTestId('room')).toContainElement(getByTestId('find-rooms'));
  expect(getByTestId('room')).toContainElement(getByTestId('list-rooms'));
});

it('Compara snapshot del componente Rooms', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <Rooms
          listRooms={[newRoom]}
          listAvailableRooms={() => null}
          findRoomsFilter={() => null}
          loadDetailRoom={() => null}
          isLoading={false}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
