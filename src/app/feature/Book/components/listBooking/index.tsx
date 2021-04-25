import { IRoom } from 'app/feature/Rooms/models/Room';
import { CardInformation } from 'app/shared/components/CardInformation';
import { roomShape } from 'app/shared/components/CardInformation/model';
import Loading from 'app/shared/components/Loading';
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
  /**
   * Indica si se está o no cargando el recurso
   */
  isLoading: boolean;
}

export const ListBookings: React.FC<IListBookingsProps> = ({
  listBookingsFinded,
  cancelBooking,
  isLoading,
}) => {
  let initial: IRoom | undefined;
  const [infoModal, setInfoModal] = React.useState(initial);

  const setDataModal = (data: IRoom) => {
    setInfoModal(data);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div data-testid="list-bookings" className="card-rooms">
        <div className="row pt-5">
          <div className="col">
            {listBookingsFinded && listBookingsFinded.length > 0 ? (
              listBookingsFinded.map((data, index) => {
                return (
                  <div
                    data-testid="card-information-bookigns"
                    className="card room-item"
                    key={index}
                  >
                    <div className="card-header book-item-header ">
                      <h3>{data.roomData.hotel.name}</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>A nombre de:</h5>
                          <span>{data.bookData.name}</span>

                          <h5 className="mt-2">Ingreso:</h5>
                          <span>{data.roomData.available_from}</span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>Habitación:</h5>
                          <span>{data.roomData.title}</span>
                          <h5 className="mt-2">Salida:</h5>
                          <span>{data.roomData.available_until}</span>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                          <h5>Valor:</h5>
                          <span>{data.roomData.value}</span>
                          <h5 className="mt-2">Camas:</h5>
                          <span>{data.roomData.capacity}</span>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                          <ModalDetailBook detailRoom={infoModal} />
                          <button
                            type="button"
                            className="btn btn-primary btn-book w-100"
                            data-testid="list-book-btn-detail"
                            data-bs-toggle="modal"
                            data-bs-target="#modalDetailBook"
                            onClick={() => setDataModal(data.roomData)}
                          >
                            <i className="fas fa-check ml-3"></i>
                            {' Detalles'}
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-book w-100 mt-3"
                            data-testid="list-book-btn-cancel"
                            data-bs-toggle="modal"
                            data-bs-target="#modalDeleteBook"
                            onClick={() => setDataModal(data.roomData)}
                          >
                            <i className="fas fa-times ml-3"></i>
                            {' Cancelar'}
                          </button>
                          <ModalDeleteBook
                            detailRoom={infoModal}
                            confirmDelete={() =>
                              data.id && cancelBooking(data.id)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center">
                <h5>No hay reservas para mostrar</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

ListBookings.propTypes = {
  listBookingsFinded: PropTypes.array.isRequired,
  cancelBooking: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

interface IDetailBookProps {
  /**
   * Lista de reservaciones
   */
  detailRoom?: IRoom;
}
const ModalDetailBook: React.FC<IDetailBookProps> = ({ detailRoom }) => {
  return (
    <>
      <div
        className="modal fade"
        id="modalDetailBook"
        data-testid="modal-detail-book"
        aria-labelledby="modalDetailBookLabel"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalDetailBookLabel">
                Detalles de tu reserva
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {detailRoom && (
                <CardInformation
                  data={detailRoom}
                  selectedRoom={detailRoom.id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ModalDetailBook.propTypes = {
  detailRoom: PropTypes.shape(roomShape),
};

interface IDeleteBookProps {
  /**
   * Lista de reservaciones
   */
  detailRoom?: IRoom;
  /**
   * Confirma eliminación de la reserva
   */
  confirmDelete: () => void;
}
const ModalDeleteBook: React.FC<IDeleteBookProps> = ({
  detailRoom,
  confirmDelete,
}) => {
  const deleteBook = () => {
    confirmDelete();
    hideModal();
  };

  const hideModal = () => {
    $('#modalDeleteBook').modal('hide');
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalDeleteBook"
        data-testid="modal-book-delete"
        aria-labelledby="modalDeleteBookLabel"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalDeleteBookLabel">
                Eliminar reserva
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {detailRoom && (
                <h5>{`¿Está seguro de cancelar la reserva de ${detailRoom.title} en ${detailRoom.hotel.name}?`}</h5>
              )}
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-between w-100">
                <button
                  type="button"
                  className="btn btn-secondary w-25"
                  data-testid="modal-book-delete-no"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger w-25"
                  data-testid="modal-book-delete-cancel"
                  onClick={deleteBook}
                >
                  Sí, cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ModalDeleteBook.propTypes = {
  detailRoom: PropTypes.shape(roomShape),
  confirmDelete: PropTypes.func.isRequired,
};
