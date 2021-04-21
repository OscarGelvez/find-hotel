import { IStateBookings } from './IStateBookings';
import { IStateRooms } from './IStateRooms';

export interface Istate {
  rooms: IStateRooms;
  bookings: IStateBookings;
}
