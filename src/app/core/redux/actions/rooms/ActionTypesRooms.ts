import { IRoom } from 'app/feature/Rooms/models/Room';

export const LIST_ROOMS = 'LISTAR_HABITACIONES';
export const FINDED_ROOMS = 'HABITACIONES_FILTRADAS';
export const LOAD_ROOM_DETAIL = 'CARGA_HABITACION_SELECCIONADA';
export const BOOKING_ROOM_SAVED = 'RESERVA_REGISTRADA';

interface ListRoomsAction {
  type: typeof LIST_ROOMS;
  payload: IRoom[];
}

interface findedRoomsAction {
  type: typeof FINDED_ROOMS;
  payload: IRoom[];
}

interface loadRoomDetail {
  type: typeof LOAD_ROOM_DETAIL;
  payload: number;
}

interface bookingRoomSaved {
  type: typeof BOOKING_ROOM_SAVED;
  payload: number;
}

// interface AccionAgregarProducto {
//   type: typeof AGREGAR_PRODUCTO;
//   payload: Producto;
// }

// interface AccionEliminarProducto {
//   type: typeof ELIMINAR_PRODUCTO;
//   payload: Producto;
// }

export type ActionTypesRooms =
  | ListRoomsAction
  | findedRoomsAction
  | loadRoomDetail
  | bookingRoomSaved;
