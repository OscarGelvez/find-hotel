import { IBooking } from '../../../../feature/Book/models/Booking';
import { bookInfo } from '../../../../shared/utils/dataBooks';
import {
  bookingDeleted,
  bookingFinded,
  defaultState,
  selectedDeleteId,
} from '../../actions/bookings/ActionBookings';
import { IStateBookings } from '../../modelo/IStateBookings';
import bookingReducer from './bookingReducer';

const newBook: IBooking = bookInfo;

describe('Reductor de resevarciones', () => {
  it('debería retornar el estado por defecto', () => {
    const initialState: IStateBookings = {
      listBookings: [],
      deleteBookingId: -1,
    };

    const newState = bookingReducer(initialState, defaultState(0));
    expect(newState).toStrictEqual(initialState);
  });

  it('debería retornar todas las reservaciones obtenidas', () => {
    const initialState: IStateBookings = {
      listBookings: [],
      deleteBookingId: -1,
    };
    const expectedState: IStateBookings = {
      ...initialState,
      listBookings: [newBook],
    };

    const newState = bookingReducer(initialState, bookingFinded([newBook]));
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería almacenar el identificador de la reservación a eliminar', () => {
    const selectedBookId = 5;
    const initialState: IStateBookings = {
      listBookings: [],
      deleteBookingId: -1,
    };
    const expectedState: IStateBookings = {
      ...initialState,
      deleteBookingId: selectedBookId,
    };

    const newState = bookingReducer(
      initialState,
      selectedDeleteId(selectedBookId)
    );
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería eliminar la reserva del array en memoria si en database fue existoso', () => {
    const codeResponse = 0;
    const initialState: IStateBookings = {
      listBookings: [newBook],
      deleteBookingId: 5,
    };
    const expectedState: IStateBookings = {
      ...initialState,
      listBookings: [],
      deleteBookingId: -1,
    };

    const newState = bookingReducer(initialState, bookingDeleted(codeResponse));
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería mantener la reserva del array en memoria si en database fue fallido', () => {
    const codeResponse = 1;
    const initialState: IStateBookings = {
      listBookings: [newBook],
      deleteBookingId: 5,
    };
    const expectedState: IStateBookings = {
      ...initialState,
      listBookings: [newBook],
      deleteBookingId: 5,
    };

    const newState = bookingReducer(initialState, bookingDeleted(codeResponse));
    expect(newState).toStrictEqual(expectedState);
  });
});
