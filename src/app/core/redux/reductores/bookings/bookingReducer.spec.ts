import { IRoom } from '../../../../feature/Rooms/models/Room';
import { listingRooms, loadDetailRoom } from '../../actions/rooms/ActionsRooms';
import { bookingRoomSaved } from '../../actions/bookings/ActionBookings';
import { IStateBookings } from '../../modelo/IStateBookings';
import bookingReducer from './bookingReducer';

describe('Reductor de reservaciones', () => {
  it('debería setear por defecto el valor de la habitación seleccionada', () => {
    const roomId = 5;
    const initialState: IStateBookings = {
      listBookings: [],
    };
    const expectedState: IStateBookings = {
      ...initialState,
    };

    const newState = bookingReducer(initialState, bookingRoomSaved(roomId));
    expect(newState).toStrictEqual(expectedState);
  });
});
