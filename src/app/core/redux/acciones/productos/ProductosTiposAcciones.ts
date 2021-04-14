import { IRoom } from 'app/feature/Producto/models/Room';

export const LIST_ROOMS = 'LISTAR_HABITACIONES';
// export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
// export const ELIMINAR_PRODUCTO = 'ELIMINAR_PRODUCTO';

interface ListRoomsAction {
  type: typeof LIST_ROOMS;
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

export type ActionTypesRooms =
  | ListRoomsAction
  // | AccionAgregarProducto
  // | AccionEliminarProducto;
