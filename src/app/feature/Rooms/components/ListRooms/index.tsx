import { CardInformation } from 'app/shared/components/CardInformation';
import * as PropTypes from 'prop-types';
import * as React from 'react';

// import { FindRooms, fieldsForm } from '../findRooms';
import { IRoom } from '../../models/Room';

export interface ListRoomsProps {
  /**
   * Lista de habitaciones
   */
  listRooms: Array<IRoom>;
  /**
   * Función necargada de mostrar el detalle de la habitación
   */
  loadDetailRoom: (roomId: number) => void;
}

export const ListRooms: React.FC<ListRoomsProps> = ({
  listRooms,
  loadDetailRoom,
}) => {
  return (
    <>
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
};
