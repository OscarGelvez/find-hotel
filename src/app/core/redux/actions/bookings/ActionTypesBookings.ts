import { IBooking } from 'app/feature/Book/models/Booking';

export const BOOKING_ROOM_SAVED = 'RESERVA_REGISTRADA';
export const BOOKING_FINDED = 'RESERVAS_ENCONTRADAS';

interface IBookingRoomSaved {
  type: typeof BOOKING_ROOM_SAVED;
  payload: number;
}

interface IBookingRoomFinded {
  type: typeof BOOKING_FINDED;
  payload: IBooking[];
}

export type IActionTypesBookings = IBookingRoomSaved | IBookingRoomFinded;
