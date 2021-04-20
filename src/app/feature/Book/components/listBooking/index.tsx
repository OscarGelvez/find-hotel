import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IBooking } from '../../models/Booking';

export interface IListBookingsProps {
  /**
   * Lista de reservaciones
   */
  listBookingsFinded: Array<IBooking>;
  /**
   * Función necargada de cancelar una reservación
   */
  cancelBooking: (bookId: number) => void;
}

export const ListBookings: React.FC<IListBookingsProps> = ({
  listBookingsFinded,
  cancelBooking,
}) => {
  return (
    <>
      <div data-testid="list-rooms" className="card-rooms">
        <div className="row pt-5">
          <div className="col">
            {listBookingsFinded &&
              listBookingsFinded.length > 0 &&
              listBookingsFinded.map((data, index) => {
                return <h2>sadasd</h2>;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

ListBookings.propTypes = {
  listBookingsFinded: PropTypes.array.isRequired,
  cancelBooking: PropTypes.func.isRequired,
};
