import { RoomsRepository } from 'app/core/api/rooms.repository';
import { IFieldsForm, IRoom } from 'app/feature/Rooms/models/Room';

import {
  IActionTypesRooms,
  LIST_ROOMS,
  LOAD_ROOM_DETAIL,
} from './ActionTypesRooms';

export function listingRooms(rooms: Array<IRoom>): IActionTypesRooms {
  return {
    type: LIST_ROOMS,
    payload: rooms,
  };
}

export function loadDetailRoom(roomId: number): IActionTypesRooms {
  return {
    type: LOAD_ROOM_DETAIL,
    payload: roomId,
  };
}

export function listingRoomsAsync() {
  return function (dispacth: any) {
    RoomsRepository.findAllRooms().then((response: any) => {
      return dispacth(listingRooms(response.data));
    });
  };
}

export function findRoomsFilter(dataFilter: IFieldsForm) {
  return function (dispacth: any) {
    RoomsRepository.findFilterRooms(dataFilter).then((response: any) => {
      return dispacth(listingRooms(response.data));
    });
  };
}
