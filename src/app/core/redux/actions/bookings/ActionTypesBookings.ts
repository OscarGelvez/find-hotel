import { IBooking } from 'app/feature/Book/models/Booking';

export const BOOKING_ROOM_SAVED = 'RESERVA_REGISTRADA';
export const BOOKING_FINDED = 'RESERVAS_ENCONTRADAS';

export const BOOKING_DELETED = 'RESERVA_ELIMINADA';
export const BOOKING_SELECTED_DELETE = 'RESERVA_A_ELIMINAR';

interface IBookingRoomSaved {
  type: typeof BOOKING_ROOM_SAVED;
  payload: number;
}

interface IBookingRoomFinded {
  type: typeof BOOKING_FINDED;
  payload: IBooking[];
}

interface IBookingDeleted {
  type: typeof BOOKING_DELETED;
  payload: number;
}

interface ISelectDeleteId {
  type: typeof BOOKING_SELECTED_DELETE;
  payload: number;
}

export type IActionTypesBookings =
  | IBookingRoomSaved
  | IBookingRoomFinded
  | IBookingDeleted
  | ISelectDeleteId;
