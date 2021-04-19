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
import { roomInfo } from '../../utils/data';
import { Layout } from './index';

const mockStore = configureStore([]);

afterEach(cleanup);

const newRoom: IRoom = roomInfo;
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
