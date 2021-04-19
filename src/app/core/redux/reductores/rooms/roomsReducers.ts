import { IRoom } from 'app/feature/Rooms/models/Room';

import {
  ActionTypesRooms,
  // BOOKING_ROOM_SAVED,
  FINDED_ROOMS,
  LIST_ROOMS,
  LOAD_ROOM_DETAIL,
} from '../../actions/rooms/ActionTypesRooms';
import { IStateRooms } from '../../modelo/IStateRooms';

const initialState: IStateRooms = {
  listRooms: Array<IRoom>(),
  selectedRoomId: -1,
};

export default function (
  state = initialState,
  action: ActionTypesRooms
): IStateRooms {
  switch (action.type) {
    case LIST_ROOMS: {
      const rooms = action.payload;
      return {
        ...state,
        listRooms: rooms,
      };
    }
    case FINDED_ROOMS: {
      const rooms = action.payload;
      return {
        ...state,
        listRooms: rooms,
      };
    }
    case LOAD_ROOM_DETAIL: {
      const roomId = action.payload;
      return {
        ...state,
        selectedRoomId: roomId,
      };
    }
    // case BOOKING_ROOM_SAVED: {
    //   return {
    //     ...state,
    //     selectedRoomId: -1,
    //   };
    // }

    default:
      return state;
  }
}
