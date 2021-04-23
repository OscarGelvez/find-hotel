import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { roomInfo } from '../../../../shared/utils/data';
import { IRoom } from '../../models/Room';
import { ListRooms } from './index';

const newRoom: IRoom = roomInfo;
afterEach(cleanup);

it('rederizar el componente ListRooms sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ListRooms listRooms={[]} loadDetailRoom={() => null} isLoading={false} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente ListRooms y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <ListRooms
        listRooms={[newRoom]}
        loadDetailRoom={() => null}
        isLoading={false}
      />
    </BrowserRouter>
  );

  expect(getByTestId('list-rooms')).toContainElement(
    getByTestId('card-information')
  );
});

it('Compara snapshot del componente ListRooms cuando hay habitaciones', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <ListRooms
          listRooms={[newRoom]}
          loadDetailRoom={() => null}
          isLoading={false}
        />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Compara snapshot del componente ListRooms cuando no hay habitaciones', () => {
  const element = renderer
    .create(
      <ListRooms listRooms={[]} loadDetailRoom={() => null} isLoading={false} />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
