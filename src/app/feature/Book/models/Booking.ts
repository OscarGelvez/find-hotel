import { IRoom } from 'app/feature/Rooms/models/Room';

export interface IFieldsFormBooking {
  /**
   * Nombre de ususario que hace la reserva
   */
  name: string;
  /**
   * Correo electrónico de quien hacer la reserva
   */
  email: string;
  /**
   * Tipo de identificación
   */
  identification_type: string;
  /**
   * Número de identificación
   */
  identification: string;
}

export interface IBooking {
  /**
   * Objeto con información de la habitación seleccionada
   */
  roomData: IRoom;
  /**
   * Objeto con la información el usuari oque reserva
   */
  bookData: IFieldsFormBooking;
  /**
   * Identificador en base de datos
   */
  id?: number;
}

export interface IFieldsFormFindBooking {
  /**
   * Correo electrónico de quien hacer la reserva
   */
  email: string;
  /**
   * Tipo de identificación
   */
  identification_type: string;
  /**
   * Número de identificación
   */
  identification: string;
}
