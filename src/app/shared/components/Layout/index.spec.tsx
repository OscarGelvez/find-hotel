import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { IStateRooms } from '../../../core/redux/modelo/IStateRooms';
import { ManageDetail } from '../../../feature/Rooms/hoc/ManageDetail';
import { IRoom } from '../../../feature/Rooms/models/Room';
import { Layout } from './index';

const mockStore = configureStore([]);

afterEach(cleanup);

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

let store;
beforeEach(() => {
  store = mockStore({
    rooms: rooms,
  });
});
it('rederizar el componente Layout sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Layout
        title={'Detalle de habitación'}
        description={'Detalles de tu habitación'}
      >
        {<ManageDetail></ManageDetail>}
      </Layout>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente Layout y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Layout
        title={'Detalle de habitación'}
        description={'Detalles de tu habitación'}
      >
        {<ManageDetail></ManageDetail>}
      </Layout>
    </Provider>
  );

  expect(getByTestId('layout')).toContainElement(getByTestId('room-detail'));
});

it('Compara snapshot del componente Layout renderizado', () => {
  const element = renderer
    .create(
      <Provider store={store}>
        <Layout
          title={'Detalle de habitación'}
          description={'Detalles de tu habitación'}
        >
          {<ManageDetail></ManageDetail>}
        </Layout>
      </Provider>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
