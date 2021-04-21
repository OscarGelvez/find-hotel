import { IBooking } from '../../../feature/Book/models/Booking';

export interface IStateBookings {
  listBookings: IBooking[];
  deleteBookingId: number;
}
