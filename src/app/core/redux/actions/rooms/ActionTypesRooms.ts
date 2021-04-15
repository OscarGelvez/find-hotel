import { IRoom } from 'app/feature/Rooms/models/Room';

export const LIST_ROOMS = 'LISTAR_HABITACIONES';
export const FINDED_ROOMS = 'HABITACIONES_FILTRADAS';

interface ListRoomsAction {
  type: typeof LIST_ROOMS;
  payload: IRoom[];
}

interface findedRoomsAction {
  type: typeof FINDED_ROOMS;
  payload: IRoom[];
}

// interface AccionAgregarProducto {
//   type: typeof AGREGAR_PRODUCTO;
//   payload: Producto;
// }

// interface AccionEliminarProducto {
//   type: typeof ELIMINAR_PRODUCTO;
//   payload: Producto;
// }

export type ActionTypesRooms = ListRoomsAction | findedRoomsAction;
// | AccionAgregarProducto
// | AccionEliminarProducto;
