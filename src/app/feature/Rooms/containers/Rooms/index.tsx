import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { ListRooms } from '../../components/ListRooms';
// import { PaginadorProductos } from '../../components/PaginadorProductos';
import { IRoom } from '../../models/Room';
import { useEffect } from 'react';

interface RoomsProps {
  listRooms: Array<IRoom>;
  listAvailableRooms: (numeroPagina: number) => void;
}

export const Rooms: React.FC<RoomsProps> = ({
  listRooms,
  listAvailableRooms,
}) => {
  useEffect(() => {
    if (listRooms && listRooms.length === 0) {
      listAvailableRooms(0);
    }
  }, [listRooms, listAvailableRooms]);
  return (
    <DivContainer>
      {/* <DivRow>
        <FormCrearProducto
          onSubmit={agregarNuevoProducto}
          formTitle="Crear producto"
        />
      </DivRow> */}
      {/* <DivRow>
       
        <PaginadorProductos
          cantidadTotalProductos={cantidadTotalProducto}
          onClickCambiarPagina={listarProductos}
        />
      </DivRow> */}

      <ListRooms listRooms={listRooms} />
    </DivContainer>
  );
};

Rooms.propTypes = {
  listRooms: PropTypes.array.isRequired,
  listAvailableRooms: PropTypes.func.isRequired,
};
