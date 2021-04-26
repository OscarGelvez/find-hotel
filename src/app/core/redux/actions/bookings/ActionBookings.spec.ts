import { baseUrl } from 'app/core/config/AxiosConfig';
import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { IBooking } from '../../../../feature/Book/models/Booking';
import { bookInfo } from '../../../../shared/utils/dataBooks';
import {
  bookingDeleted,
  bookingFinded,
  bookingRoomSaved,
  cancelBooking,
  findBooking,
  isLoading,
  saveBookingRoom,
  selectedDeleteId,
  setError,
} from './ActionBookings';

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
const errorDefault = { message: '', type: '' };

describe('Test servicio de guardar reservaciones', () => {
  let store;

  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Debería almacenar la resevación correctamente', async (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      setError(errorDefault),
      bookingRoomSaved(5),
    ];

    moxios.stubRequest(baseUrl + '/booking', {
      status: 201,
      responseText: bookInfo,
    });

    await store.dispatch(saveBookingRoom(bookInfo)).then((res) => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });

  it('Debería fallar al guardar la reservación', async (done) => {
    const error = {
      message:
        'Se ha presentado un error al guardar tu reserva. Por favor, intente nuevamente',
      type: 'rooms-save-book',
    };

    const expectedActions = [
      isLoading(true),
      isLoading(false),
      setError(error),
      bookingRoomSaved(-1),
    ];

    moxios.stubRequest(baseUrl + '/booking', {
      status: 404,
      responseText: -1,
    });

    await store.dispatch(saveBookingRoom(bookInfo)).then((res) => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
    });
    done();
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

  it('Deberia buscar una reservación correctamente', async (done) => {
    const expectedActions = [
      isLoading(true),
      isLoading(false),
      setError(errorDefault),
      bookingFinded(arrBooking),
    ];

    moxios.stubRequest(
      baseUrl +
        '/booking?bookData.email=test@test.com&bookData.identification_type=1&bookData.identification=123456789',
      {
        status: 200,
        responseText: arrBooking,
      }
    );

    await store.dispatch(findBooking(findBookingData)).then((res) => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });

  it('Debería fallar al buscar una reservación', async (done) => {
    const findBookingData = {
      email: 'test@test.com',
      identification_type: '1',
      identification: '123456789',
    };

    const error = {
      message:
        'Se ha presentado un error al cargar las reservas. Por favor, intente nuevamente',
      type: 'books',
    };

    const expectedActions = [
      isLoading(true),
      isLoading(false),
      setError(error),
      bookingFinded([]),
    ];

    moxios.stubRequest(
      baseUrl +
        '/booking?bookData.email=test@test.com&bookData.identification_type=1&bookData.identification=123456789',
      {
        status: 404,
        responseText: [],
      }
    );

    await store.dispatch(findBooking(findBookingData)).then((res) => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
    });
    done();
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

  it('Debería eliminar la resevación correctamente', async (done) => {
    const expectedActions = [
      isLoading(true),
      selectedDeleteId(179),
      isLoading(false),
      setError(errorDefault),
      selectedDeleteId(-1),
      bookingDeleted(0),
    ];

    moxios.stubRequest(baseUrl + '/booking/179', {
      status: 200,
      responseText: 0,
    });

    await store.dispatch(cancelBooking(179)).then((res) => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });

  it('Debería fallar al eliminar la reservación', async (done) => {
    const error = {
      message:
        'Se ha presentado un error al cancelar la reserva. Por favor, intente nuevamente',
      type: 'books',
    };

    const expectedActions = [
      isLoading(true),
      selectedDeleteId(305),
      isLoading(false),
      setError(error),
      selectedDeleteId(-1),
      bookingDeleted(1),
    ];

    moxios.stubRequest(baseUrl + '/booking/305', {
      status: 404,
      responseText: 0,
    });

    await store.dispatch(cancelBooking(305)).then((res) => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
    });
    done();
  });
});
