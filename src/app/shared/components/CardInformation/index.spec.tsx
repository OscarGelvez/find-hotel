import '@testing-library/jest-dom';

import { cleanup,render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { IRoom } from '../../../feature/Rooms/models/Room';
import { CardInformation } from './index';

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

it('rederizar el componente CardInformation sin errores en modo detalle', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CardInformation
      data={newRoom}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente CardInformation y verifica existencia de componentes hijos en modo detalle', () => {
  const { getByTestId } = render(
    <CardInformation
      data={newRoom}
      selectedRoom={roomId}
      saveBookingRoom={() => null}
    />
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('modal-form-book')
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('form-field-hotel-desc')
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('star-score')
  );
});

it('Compara snapshot del componente CardInformation en modo detalle', () => {
  const element = renderer
    .create(
      <CardInformation
        data={newRoom}
        selectedRoom={roomId}
        saveBookingRoom={() => null}
      />
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});

it('rederizar el componente CardInformation sin errores en modo lista', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CardInformation data={newRoom} loadDetailRoom={() => null} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente CardInformation y verifica existencia de componentes hijos en modo lista', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <CardInformation data={newRoom} loadDetailRoom={() => null} />
    </BrowserRouter>
  );

  expect(getByTestId('card-information')).toContainElement(
    getByTestId('form-button-load-detail')
  );
});

it('Compara snapshot del componente CardInformation en modo lista', () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <CardInformation data={newRoom} loadDetailRoom={() => null} />
      </BrowserRouter>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
