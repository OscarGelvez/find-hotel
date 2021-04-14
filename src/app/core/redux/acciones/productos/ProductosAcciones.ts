import {
  LIST_ROOMS,
  ActionTypesRooms,
} from './ProductosTiposAcciones';
import { IRoom } from 'app/feature/Producto/models/Room';
import { ProductoRepositorio } from 'app/core/api/productos.repositorio';

export function listingRooms(
  rooms: Array<IRoom>,
): ActionTypesRooms {
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
    ProductoRepositorio.consultarPorPagina(
      numeroPagina
    ).then((response: any) =>
    {
    console.log(response.data)
     return dispacth(
        listingRooms(response.data)
      )}
    );
  };
}
