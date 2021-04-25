import {
  IBooking,
  IFieldsFormFindBooking,
} from 'app/feature/Book/models/Booking';
import axios from 'axios';

import { baseUrl } from '../config/AxiosConfig';

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
    axios.post(`${baseUrl}/booking`, bookingData, {
      headers: headers,
    }),
  /**
   * Consulta una reservación hecha
   * @returns arreglo de reservaciones
   */
  findBooking: (findBookingData: IFieldsFormFindBooking) =>
    axios.get(`${baseUrl}/booking${getFilterBook(findBookingData)}`),
  /**
   * Elimina una reservación
   * @param bookingId Identificador de la reserva
   * @returns reserva eliminada
   */
  cancelBooking: (bookingId: number) =>
    axios.delete(`${baseUrl}/booking/${bookingId}`),
};
