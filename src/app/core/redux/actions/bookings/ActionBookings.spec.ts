import thunk from 'redux-thunk';
import {
  bookingDeleted,
  bookingRoomSaved,
  cancelBooking,
  findBooking,
  isLoading,
  saveBookingRoom,
  selectedDeleteId,
} from './ActionBookings';
import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import { bookInfo } from '../../../../shared/utils/dataBooks';
import { bookingFinded } from './ActionBookings';
import { IBooking } from '../../../../feature/Book/models/Booking';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const arrBooking: IBooking[] = [bookInfo];

const findBookingData = {
  name: 'test',
  email: 'test@test.com',
  identification_type: '1',
  identification: '123456789',
};

const initialState = {
  listBookings: [],
  deleteBookingId: -1,
};

describe('Test servicio de guardar reservaciones correctamente', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Debería almacenar la resevación', (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      bookingRoomSaved(100),
    ];
    bookInfo.bookData = findBookingData;
    bookInfo.id = 100;

    return store.dispatch(saveBookingRoom(bookInfo)).then((res) => {
      console.log(res);
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('Debería fallar al guardar la reservación', async (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      bookingRoomSaved(-1),
    ];
    bookInfo.id = 100;
    return store.dispatch(saveBookingRoom(bookInfo)).then((res) => {
      console.log(res);
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});

describe('Test servicio de búsqueda de reservaciones', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Deberia buscar una reservación correctamente', (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      bookingFinded(arrBooking),
    ];

    return store.dispatch(findBooking(findBookingData)).then((res) => {
      console.log(res);
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  xit('Debería fallar en la carga de las reservaciones', async (done) => {
    const findBookingData = {
      email: 'test@test.com',
      identification_type: '2',
      identification: '123456789',
    };

    const expectedActions = [
      isLoading(true),
      isLoading(false),
      bookingFinded([]),
    ];

    return store.dispatch(findBooking(findBookingData)).then((res) => {
      console.log(res);
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});

describe('Test servicio de eliminar reservaciones', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Debería eliminar la resevación correctamente', (done) => {
    const expectedActions = [
      isLoading(true),
      selectedDeleteId(100),
      isLoading(false),

      bookingDeleted(0),
    ];

    return store.dispatch(cancelBooking(100)).then((res) => {
      console.log(res);
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('Debería fallar al guardar la reservación', async (done) => {
    const expectedActions = [
      isLoading(true),
      selectedDeleteId(100),
      isLoading(false),
      bookingDeleted(1),
    ];

    return store.dispatch(cancelBooking(100)).then((res) => {
      console.log(res);
      const actualAction = store.getActions();
      console.log(actualAction);
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});
