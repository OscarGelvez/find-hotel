import { IStateBookings } from './IStateBookings';
import { IStateMain } from './IStateMain';
import { IStateRooms } from './IStateRooms';

export interface Istate {
  rooms: IStateRooms;
  bookings: IStateBookings;
  main: IStateMain;
}
