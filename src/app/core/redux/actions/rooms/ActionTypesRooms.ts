import { IRoom } from 'app/feature/Rooms/models/Room';

export const LIST_ROOMS = 'LISTAR_HABITACIONES';
export const LOAD_ROOM_DETAIL = 'CARGA_HABITACION_SELECCIONADA';
export const BOOKING_ROOM_SAVED = 'RESERVA_REGISTRADA';

interface ListRoomsAction {
  type: typeof LIST_ROOMS;
  payload: IRoom[];
}

interface LoadRoomDetail {
  type: typeof LOAD_ROOM_DETAIL;
  payload: number;
}

interface BookingRoomSaved {
  type: typeof BOOKING_ROOM_SAVED;
  payload: number;
}

export type ActionTypesRooms =
  | ListRoomsAction
  | LoadRoomDetail
  | BookingRoomSaved;
