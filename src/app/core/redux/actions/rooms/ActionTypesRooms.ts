import { IRoom } from 'app/feature/Rooms/models/Room';

export const LIST_ROOMS = 'LISTAR_HABITACIONES';
export const LOAD_ROOM_DETAIL = 'CARGA_HABITACION_SELECCIONADA';
export const BOOKING_ROOM_SAVED = 'RESERVA_REGISTRADA';

interface IListRoomsAction {
  type: typeof LIST_ROOMS;
  payload: IRoom[];
}

interface ILoadRoomDetail {
  type: typeof LOAD_ROOM_DETAIL;
  payload: number;
}

interface IBookingRoomSaved {
  type: typeof BOOKING_ROOM_SAVED;
  payload: number;
}

export type IActionTypesRooms =
  | IListRoomsAction
  | ILoadRoomDetail
  | IBookingRoomSaved;
