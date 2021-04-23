import { CardInformation } from 'app/shared/components/CardInformation';
import Loading from 'app/shared/components/Loading';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { IRoom } from '../../models/Room';

export interface IListRoomsProps {
  /**
   * Lista de habitaciones
   */
  listRooms: Array<IRoom>;
  /**
   * Función necargada de mostrar el detalle de la habitación
   */
  loadDetailRoom: (roomId: number) => void;
  /**
   * Indica si se está o no cargando el recurso
   */
  isLoading: boolean;
}

export const ListRooms: React.FC<IListRoomsProps> = ({
  listRooms,
  loadDetailRoom,
  isLoading,
}) => {
  return (
    <>
      {isLoading && <Loading />}
      <div data-testid="list-rooms" className="card-rooms">
        <div className="row pt-5">
          <div className="col">
            {listRooms &&
              listRooms.length > 0 &&
              listRooms.map((data, index) => {
                return (
                  <CardInformation
                    key={index}
                    data={data}
                    loadDetailRoom={loadDetailRoom}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

ListRooms.propTypes = {
  listRooms: PropTypes.array.isRequired,
  loadDetailRoom: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
