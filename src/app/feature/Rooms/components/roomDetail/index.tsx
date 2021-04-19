import { CardInformation } from 'app/shared/components/CardInformation';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { BookingData, IRoom } from '../../models/Room';

export interface RoomDetailViewProps {
  /**
   * Lista de habitaciones
   */
  listRooms: Array<IRoom>;
  /**
   * Función necargada de mostrar el detalle de la habitación
   */
  selectedRoom: number;
  /**
   * Función encargada de registrar la reservación
   */
  saveBookingRoom?: (bookingData: BookingData) => void;
}

export const RoomDetailView: React.FC<RoomDetailViewProps> = ({
  listRooms,
  selectedRoom,
  saveBookingRoom,
}) => {
  const roomSelected = listRooms.filter((item) => item.id === selectedRoom)[0];
  return (
    <>
      <div data-testid="room-detail-view" className="card-rooms">
        <div className="row pt-5">
          <div className="col">
            {roomSelected ? (
              <CardInformation
                key={selectedRoom}
                data={roomSelected}
                selectedRoom={selectedRoom}
                saveBookingRoom={saveBookingRoom}
              />
            ) : (
              <div className="text-center">
                <h5>No hay datos para mostrar</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

RoomDetailView.propTypes = {
  listRooms: PropTypes.array.isRequired,
  selectedRoom: PropTypes.number.isRequired,
  saveBookingRoom: PropTypes.func,
};
