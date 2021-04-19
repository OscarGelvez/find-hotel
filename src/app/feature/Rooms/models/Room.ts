export interface IRoom {
  /**
   * Identificador del hotel
   */
  id: number;
  /**
   * Título de la habitación
   */
  title: string;
  /**
   * Imagen descriptiva de la habitación
   */
  image: string;
  /**
   * Objeto hotel al cual pertenece la habitación
   */
  hotel: IHotel;
  /**
   * Valor de la habitación
   */
  value: string;
  /**
   * Indica si tiene o no aire acondicionado
   */
  ac: string;
  /**
   * Indica si cuenta o no con parquedadero
   */
  parking: string;
  /**
   * Fecha inicial de disponibilidad
   */
  available_from: string;
  /**
   * Fecha final de disponibilidad
   */
  available_until: string;
  /**
   * Indica si cuenta con conexión wifi
   */
  wifi: string;
  /**
   * Capacidad de personas por habitación
   */
  capacity: number;
  /**
   * Descripción general de la habitación
   */
  description: string;
}

export interface IHotel {
  /**
   * Identificador del hotel
   */
  id: number;
  /**
   * Nombre del hotel
   */
  name: string;
  /**
   * Dirección y/o ubicacion del hotel
   */
  address: string;
  /**
   * Cantidad de estrellas del hotel
   */
  stars: number;
  /**
   * Descripción general
   */
  description: string;
  /**
   * Puntaje de calificación dado por usuarios
   */
  score: number;
}

export interface IFieldsForm {
  /**
   * Fecha inicio de reservación
   */
  fromDate?: string;
  /**
   * Fecha final de reservación
   */
  untilDate?: string;
  /**
   * Cantidad de personas en habitación
   */
  capacity?: string;
  /**
   * Habitación con aire acondicionado
   */
  withAir?: boolean;
  /**
   * Habitación con parqueadero propio
   */
  withParking?: boolean;
}

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

export interface IBookingData {
  /**
   * Objeto con información de la habitación seleccionada
   */
  roomData: IRoom;
  /**
   * Objeto con la información el usuari oque reserva
   */
  bookData: IFieldsFormBooking;
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
