import { RoomsRepository } from 'app/core/api/rooms.repository';
import { IFieldsForm, IRoom } from 'app/feature/Rooms/models/Room';

import { IActionTypesMain, IS_LOADING } from '../main/ActionTypesMain';
import {
  DEFAULT_STATE,
  IActionTypesRooms,
  LIST_ROOMS,
  LOAD_ROOM_DETAIL,
} from './ActionTypesRooms';

export function defaultState(id: number): IActionTypesRooms {
  return {
    type: DEFAULT_STATE,
    payload: id,
  };
}

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

export function isLoading(loading: boolean): IActionTypesMain {
  return {
    type: IS_LOADING,
    payload: loading,
  };
}

export function listingRoomsAsync() {
  return async function (dispacth: any) {
    dispacth(isLoading(true));
    await RoomsRepository.findAllRooms()
      .then((response: any) => {
        dispacth(isLoading(false));
        return dispacth(listingRooms(response.data));
      })
      .catch((err) => {
        dispacth(isLoading(false));
        return dispacth(listingRooms([]));
      });
  };
}

export function findRoomsFilter(dataFilter: IFieldsForm) {
  return async function (dispacth: any) {
    dispacth(isLoading(true));
    await RoomsRepository.findFilterRooms(dataFilter)
      .then((response: any) => {
        dispacth(isLoading(false));
        return dispacth(listingRooms(response.data));
      })
      .catch((err) => {
        dispacth(isLoading(false));
        return dispacth(listingRooms([]));
      });
  };
}
