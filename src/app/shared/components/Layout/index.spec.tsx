import '@testing-library/jest-dom';

import { cleanup, render } from '@testing-library/react';
import { IStateMain } from 'app/core/redux/modelo/IStateMain';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
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

const main: IStateMain = {
  isLoading: false,
  errorMessage: { message: '', type: '' },
};

let store;
beforeEach(() => {
  store = mockStore({
    rooms: rooms,
    main,
  });
});
it('rederizar el componente Layout sin errores', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout
          title={'Detalle de habitación'}
          description={'Detalles de tu habitación'}
        >
          {<ManageDetail></ManageDetail>}
        </Layout>
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renderiza el componente Layout y verifica existencia de componentes hijos', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout
          title={'Detalle de habitación'}
          description={'Detalles de tu habitación'}
        >
          {<ManageDetail></ManageDetail>}
        </Layout>
      </BrowserRouter>
    </Provider>
  );

  expect(getByTestId('layout')).toContainElement(getByTestId('room-detail'));
});

it('Compara snapshot del componente Layout renderizado', () => {
  const element = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Layout
            title={'Detalle de habitación'}
            description={'Detalles de tu habitación'}
          >
            {<ManageDetail></ManageDetail>}
          </Layout>
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(element).toMatchSnapshot();
});
