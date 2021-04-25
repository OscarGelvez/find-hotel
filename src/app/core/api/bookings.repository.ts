import {
  IBooking,
  IFieldsFormFindBooking,
} from 'app/feature/Book/models/Booking';

import { axiosIntance } from '../config/AxiosConfig';

/**
 * Función encargada de armar los filtros en la búsqueda de la reserva
 * @param filterData
 * @returns cadena filtro
 */
const getFilterBook = (filterData: IFieldsFormFindBooking) => {
  let filterBy = '';

  if (
    filterData &&
    filterData.email !== '' &&
    filterData.identification_type !== '' &&
    filterData.identification !== ''
  ) {
    filterBy = `?bookData.email=${filterData.email}&bookData.identification_type=${filterData.identification_type}&bookData.identification=${filterData.identification}`;
  }

  return filterBy;
};

const headers = {
  'Content-Type': 'application/json',
};

export const BookingsRepository = {
  /**
   * Almacena una reservación en base de datos
   * @param bookingData datos de la reserva
   * @returns mensaje de éxito
   */
  saveBookingRoom: (bookingData: IBooking) =>
    axiosIntance.post('/booking', bookingData, {
      headers: headers,
    }),
  /**
   * Consulta una reservación hecha
   * @returns arreglo de reservaciones
   */
  findBooking: (findBookingData: IFieldsFormFindBooking) => {
    return axiosIntance.get(`/booking${getFilterBook(findBookingData)}`);
  },
  /**
   * Elimina una reservación
   * @param bookingId Identificador de la reserva
   * @returns reserva eliminada
   */
  cancelBooking: (bookingId: number) =>
    axiosIntance.delete(`/booking/${bookingId}`),
};
