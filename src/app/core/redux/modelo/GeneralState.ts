import { IStateRooms } from './IStateRooms';
import { IStateBookings } from './IStateBookings';

export interface Istate {
  rooms: IStateRooms;
  bookings: IStateBookings;
}
