import { BookingsRepository } from 'app/core/api/bookings.repository';

import {
  IBooking,
  IFieldsFormFindBooking,
} from '../../../../feature/Book/models/Booking';
import { IErrorToast } from '../../modelo/IStateMain';
import { ERROR, IActionTypesMain, IS_LOADING } from '../main/ActionTypesMain';
import {
  BOOKING_DELETED,
  BOOKING_FINDED,
  BOOKING_ROOM_SAVED,
  BOOKING_SELECTED_DELETE,
  DEFAULT_STATE,
  IActionTypesBookings,
} from './ActionTypesBookings';

const errorDefault = { message: '', type: '' };

export function defaultState(id: number): IActionTypesBookings {
  return {
    type: DEFAULT_STATE,
    payload: id,
  };
}

export function bookingRoomSaved(roomId: number): IActionTypesBookings {
  return {
    type: BOOKING_ROOM_SAVED,
    payload: roomId,
  };
}

export function bookingFinded(
  bookingsFinded: IBooking[]
): IActionTypesBookings {
  return {
    type: BOOKING_FINDED,
    payload: bookingsFinded,
  };
}

export function selectedDeleteId(responseCode: number): IActionTypesBookings {
  return {
    type: BOOKING_SELECTED_DELETE,
    payload: responseCode,
  };
}

export function bookingDeleted(responseCode: number): IActionTypesBookings {
  return {
    type: BOOKING_DELETED,
    payload: responseCode,
  };
}

export function isLoading(loading: boolean): IActionTypesMain {
  return {
    type: IS_LOADING,
    payload: loading,
  };
}

export function setError(error: IErrorToast): IActionTypesMain {
  return {
    type: ERROR,
    payload: error,
  };
}

export function saveBookingRoom(bookingData: IBooking) {
  return async function (dispacth: any) {
    dispacth(isLoading(true));
    await BookingsRepository.saveBookingRoom(bookingData)
      .then((response: any) => {
        dispacth(isLoading(false));
        dispacth(setError(errorDefault));
        return dispacth(bookingRoomSaved(response.data.id));
      })
      .catch((err) => {
        dispacth(isLoading(false));
        dispacth(
          setError({
            type: 'rooms-save-book',
            message:
              'Se ha presentado un error al guardar tu reserva. Por favor, intente nuevamente',
          })
        );
        return dispacth(bookingRoomSaved(-1));
      });
  };
}

export function findBooking(findBookingData: IFieldsFormFindBooking) {
  return async function (dispacth: any) {
    dispacth(isLoading(true));
    await BookingsRepository.findBooking(findBookingData)
      .then((response: any) => {
        dispacth(isLoading(false));
        dispacth(setError(errorDefault));
        return dispacth(bookingFinded(response.data));
      })
      .catch((err) => {
        dispacth(isLoading(false));
        dispacth(
          setError({
            type: 'books',
            message:
              'Se ha presentado un error al cargar las reservas. Por favor, intente nuevamente',
          })
        );
        return dispacth(bookingFinded([]));
      });
  };
}

export function cancelBooking(bookingId: number) {
  return async function (dispacth: any) {
    dispacth(isLoading(true));
    dispacth(selectedDeleteId(bookingId));
    await BookingsRepository.cancelBooking(bookingId)
      .then((response) => {
        dispacth(isLoading(false));
        dispacth(setError(errorDefault));
        return dispacth(bookingDeleted(0));
      })
      .catch((err) => {
        dispacth(isLoading(false));
        dispacth(
          setError({
            type: 'books',
            message:
              'Se ha presentado un error al cancelar la reserva. Por favor, intente nuevamente',
          })
        );
        return dispacth(bookingDeleted(1));
      });
  };
}
