import { IRoom } from 'app/feature/Rooms/models/Room';

export const DEFAULT_STATE = 'DEFAULT_STATE';
export const LIST_ROOMS = 'LISTAR_HABITACIONES';
export const LOAD_ROOM_DETAIL = 'CARGA_HABITACION_SELECCIONADA';

interface IDefaultState {
  type: typeof DEFAULT_STATE;
  payload: number;
}

interface IListRoomsAction {
  type: typeof LIST_ROOMS;
  payload: IRoom[];
}

interface ILoadRoomDetail {
  type: typeof LOAD_ROOM_DETAIL;
  payload: number;
}

export type IActionTypesRooms =
  | IListRoomsAction
  | ILoadRoomDetail
  | IDefaultState;
