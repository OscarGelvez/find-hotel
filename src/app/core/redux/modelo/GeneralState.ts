import { IStateBookings } from './IStateBookings';
import { IStateRooms } from './IStateRooms';
import { IStateMain } from './IStateMain';

export interface Istate {
  rooms: IStateRooms;
  bookings: IStateBookings;
  main: IStateMain;
}
