import { RoomsRepository } from 'app/core/api/rooms.repository';
import { IFieldsForm, IRoom } from 'app/feature/Rooms/models/Room';

import { IErrorToast } from '../../modelo/IStateMain';
import { ERROR, IActionTypesMain, IS_LOADING } from '../main/ActionTypesMain';
import {
  DEFAULT_STATE,
  IActionTypesRooms,
  LIST_ROOMS,
  LOAD_ROOM_DETAIL,
} from './ActionTypesRooms';
const errorDefault = { message: '', type: '' };

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

export function setError(error: IErrorToast): IActionTypesMain {
  return {
    type: ERROR,
    payload: error,
  };
}

export function listingRoomsAsync() {
  return async function (dispacth: any) {
    dispacth(isLoading(true));
    await RoomsRepository.findAllRooms()
      .then((response: any) => {
        dispacth(isLoading(false));
        dispacth(setError(errorDefault));
        return dispacth(listingRooms(response.data));
      })
      .catch((err) => {
        dispacth(isLoading(false));
        dispacth(
          setError({
            type: 'rooms',
            message:
              'Error al cargar los hoteles. Por favor, intente nuevamente',
          })
        );
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
        dispacth(setError(errorDefault));
        return dispacth(listingRooms(response.data));
      })
      .catch((err) => {
        dispacth(isLoading(false));
        dispacth(
          setError({
            type: 'rooms-filter',
            message:
              'No se encotraron resultados. Por favor, intente nuevamente',
          })
        );
        return dispacth(listingRooms([]));
      });
  };
}
