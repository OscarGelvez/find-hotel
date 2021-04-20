import { BookingsRepository } from 'app/core/api/bookings.repository';
import {
  IBooking,
  IFieldsFormFindBooking,
} from '../../../../feature/Book/models/Booking';
import {
  BOOKING_FINDED,
  BOOKING_ROOM_SAVED,
  IActionTypesBookings,
} from './ActionTypesBookings';

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

export function saveBookingRoom(bookingData: IBooking) {
  return function (dispacth: any) {
    BookingsRepository.saveBookingRoom(bookingData).then((response: any) => {
      return dispacth(bookingRoomSaved(response.data.id));
    });
  };
}

export function findBooking(findBookingData: IFieldsFormFindBooking) {
  return function (dispacth: any) {
    BookingsRepository.findBooking(findBookingData).then((response: any) => {
      return dispacth(bookingFinded(response.data));
    });
  };
}

export function cancelBooking(bookingId: number) {
  return function (dispacth: any) {
    BookingsRepository.cancelBooking(bookingId).then((response: any) => {
      return dispacth(bookingFinded(response.data));
    });
  };
}
