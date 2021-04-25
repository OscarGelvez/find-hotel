import thunk from 'redux-thunk';
import {
  findRoomsFilter,
  isLoading,
  listingRooms,
  listingRoomsAsync,
} from './ActionsRooms';
import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import { roomInfo } from '../../../../shared/utils/data';
import { IRoom } from '../../../../feature/Rooms/models/Room';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const arrRooms: IRoom[] = [roomInfo];

import { baseUrl } from '../../../config/AxiosConfig';

const initialState = {
  listRooms: [],
  selectedRoomId: -1,
};

describe('Test servicio de buscar habitaciones', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Debería buscar la habitaciones correctamente', async (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      listingRooms(arrRooms),
    ];

    moxios.stubRequest(baseUrl + '/rooms', {
      status: 200,
      responseText: arrRooms,
    });

    await store.dispatch(listingRoomsAsync()).then((res) => {
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });

  it('Debería fallar al buscar habitaciones', async (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      listingRooms([]),
    ];

    moxios.stubRequest(baseUrl + '/rooms', {
      status: 404,
      responseText: [],
    });

    await store.dispatch(listingRoomsAsync()).then((res) => {
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });
});

describe('Test servicio de filtrar en búsqueda de habitaciones', () => {
  let store;

  const filterObj = {
    fromDate: '2021-04-25',
    untilDate: '2021-04-28',
    capacity: '1',
    withAir: true,
    withParking: true,
  };
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Debería filtrar una habitación correctamente', async (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      listingRooms(arrRooms),
    ];

    moxios.stubRequest(
      baseUrl +
        '/rooms?available_from_lte=2021-04-25&available_until_gte=2021-04-28&capacity=1&ac=Y&parking=Y',
      {
        status: 200,
        responseText: arrRooms,
      }
    );

    await store.dispatch(findRoomsFilter(filterObj)).then((res) => {
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });

  it('Debería fallar al filtrar una habitación', async (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      listingRooms([]),
    ];

    moxios.stubRequest(
      baseUrl +
        '/rooms?available_from_lte=2021-04-25&available_until_gte=2021-04-28&capacity=1&ac=Y&parking=Y',
      {
        status: 404,
        responseText: [],
      }
    );

    await store.dispatch(findRoomsFilter(filterObj)).then((res) => {
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });
});
