import { ActionTypesRooms, LIST_ROOMS } from './ActionTypesRooms';
import { IRoom } from 'app/feature/Rooms/models/Room';
import { RoomsRepository } from 'app/core/api/rooms.repository';

export function listingRooms(rooms: Array<IRoom>): ActionTypesRooms {
  return {
    type: LIST_ROOMS,
    payload: rooms,
  };
}

// export function agregarNuevoProducto(
//   producto: Producto
// ): TiposAccionesProducto {
//   return {
//     type: AGREGAR_PRODUCTO,
//     payload: producto,
//   };
// }

// export function eliminarProducto(producto: Producto): TiposAccionesProducto {
//   return {
//     type: ELIMINAR_PRODUCTO,
//     payload: producto,
//   };
// }

export function listingRoomsAsync(numeroPagina: number) {
  return function (dispacth: any) {
    RoomsRepository.consultarPorPagina(numeroPagina).then((response: any) => {
      console.log(response.data);
      return dispacth(listingRooms(response.data));
    });
  };
}
