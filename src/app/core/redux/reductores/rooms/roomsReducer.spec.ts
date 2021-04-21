import { IRoom } from '../../../../feature/Rooms/models/Room';
import { roomInfo } from '../../../../shared/utils/data';
import {
  defaultState,
  listingRooms,
  loadDetailRoom,
} from '../../actions/rooms/ActionsRooms';
import { IStateRooms } from '../../modelo/IStateRooms';
import roomsReducers from './roomsReducers';

const newRoom: IRoom = roomInfo;

describe('Reductor de habitaciones', () => {
  it('debería retornar el estado por defecto', () => {
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: -1,
    };

    const newState = roomsReducers(initialState, defaultState(0));
    expect(newState).toStrictEqual(initialState);
  });

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
});
