import '@testing-library/jest-dom';

import { cleanup,render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { IRoom } from '../../models/Room';
import { ListRooms } from './index';

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
afterEach(cleanup);

it('rederizar el componente ListRooms sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ListRooms listRooms={[]} loadDetailRoom={() => null} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente ListRooms y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <ListRooms listRooms={[newRoom]} loadDetailRoom={() => null} />
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
        <ListRooms listRooms={[newRoom]} loadDetailRoom={() => null} />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('Compara snapshot del componente ListRooms cuando no hay habitaciones', () => {
  const element = renderer
    .create(<ListRooms listRooms={[]} loadDetailRoom={() => null} />)
    .toJSON();
  expect(element).toMatchSnapshot();
});
