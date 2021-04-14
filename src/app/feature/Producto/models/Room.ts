export interface IRoom {
  /**
   * Identificador del hotel
   */
  id: number;
  /**
   * Objeto hotel al cual pertenece la habitación
   */
  hotel: IHotel;
  /**
   * Valor de la habitación
   */
  value: number;
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
