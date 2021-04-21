import { IRoom } from '../../../../feature/Rooms/models/Room';
import { roomInfo } from '../../../../shared/utils/data';
import { bookingRoomSaved } from '../../actions/bookings/ActionBookings';
import { listingRooms, loadDetailRoom } from '../../actions/rooms/ActionsRooms';
import { IStateRooms } from '../../modelo/IStateRooms';
import roomsReducers from './roomsReducers';

const newRoom: IRoom = roomInfo;

describe('Reductor de habitaciones', () => {
  it('debería retornar todas las habitaciones obtenidas', () => {
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: -1,
    };
    const expectedState: IStateRooms = {
      ...initialState,
      listRooms: [newRoom],
    };

    const newState = roomsReducers(initialState, listingRooms([newRoom]));
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería almacenar el identificador de la habitación seleccionada', () => {
    const selectedRoomId = 56;
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: -1,
    };
    const expectedState: IStateRooms = {
      ...initialState,
      selectedRoomId: selectedRoomId,
    };

    const newState = roomsReducers(
      initialState,
      loadDetailRoom(selectedRoomId)
    );
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería setear por defecto el valor de la habitación seleccionada', () => {
    const roomId = 5;
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: 56,
    };
    const expectedState: IStateRooms = {
      ...initialState,
      selectedRoomId: 56,
    };

    const newState = roomsReducers(initialState, bookingRoomSaved(roomId));
    expect(newState).toStrictEqual(expectedState);
  });
});
