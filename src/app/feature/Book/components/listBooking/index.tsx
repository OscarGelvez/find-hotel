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
  console.log(listBookingsFinded);
  return (
    <>
      <div data-testid="list-rooms" className="card-rooms">
        <div className="row pt-5">
          <div className="col">
            {listBookingsFinded &&
              listBookingsFinded.length > 0 &&
              listBookingsFinded.map((data, index) => {
                return (
                  <div
                    data-testid="card-information"
                    className="card room-item"
                  >
                    <div className="card-header book-item-header ">
                      <h3>{data.roomData.hotel.name}</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>A nombre de:</h5>
                          <span>{data.bookData.name}</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>Habitación:</h5>
                          <span>{data.roomData.title}</span>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>Valor:</h5>
                          <span>{data.roomData.value}</span>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                          <button
                            type="button"
                            className="btn btn-primary btn-book w-100"
                            data-testid="form-button-load-detail"
                            onClick={() => null}
                          >
                            <i className="fas fa-check ml-3"></i>
                            {' Detalles'}
                          </button>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>Camas:</h5>
                          <span>{data.roomData.capacity}</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>Ingreso:</h5>
                          <span>{data.roomData.available_from}</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>Salida:</h5>
                          <span>{data.roomData.available_until}</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <button
                            type="button"
                            className="btn btn-danger btn-book w-100"
                            data-testid="form-button-load-detail"
                            onClick={() => null}
                          >
                            <i className="fas fa-times-check ml-3"></i>
                            {' Cancelar'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
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
