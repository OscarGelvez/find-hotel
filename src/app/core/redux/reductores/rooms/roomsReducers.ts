import {
  ActionTypesRooms,
  LIST_ROOMS,
} from '../../actions/rooms/ActionTypesRooms';
import { IStateRooms } from '../../modelo/IStateRooms';
import { IRoom } from 'app/feature/Rooms/models/Room';

const initialState: IStateRooms = {
  listRooms: Array<IRoom>(),
};

export default function (
  state = initialState,
  action: ActionTypesRooms
): IStateRooms {
  switch (action.type) {
    case LIST_ROOMS: {
      console.log(action.payload);
      const rooms = action.payload;
      return {
        ...state,
        listRooms: rooms,
      };
    }

    default:
      return state;
  }
}
