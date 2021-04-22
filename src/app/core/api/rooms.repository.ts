import { IFieldsForm } from 'app/feature/Rooms/models/Room';

import { axiosIntance } from '../config/AxiosConfig';

/**
 * Función encargad de armar los filtros para la obtención de hoteles/habitaciones
 * @param data
 * @returns cadena filtro
 */
const getDataFilter = (data: IFieldsForm) => {
  let filterBy = '?';
  if (data.fromDate) {
    filterBy = `${filterBy}available_from_lte=${data.fromDate}`;
  }
  if (data.untilDate) {
    filterBy = `${filterBy !== '' ? filterBy + '&' : ''}available_until_gte=${
      data.untilDate
    }`;
  }
  if (data.capacity) {
    filterBy = `${filterBy !== '' ? filterBy + '&' : ''}capacity=${
      data.capacity
    }`;
  }

  filterBy = `${filterBy !== '' ? filterBy + '&' : ''}ac=${
    data.withAir && data.withAir === true ? 'Y' : 'N'
  }`;

  filterBy = `${filterBy !== '' ? filterBy + '&' : ''}parking=${
    data.withParking && data.withParking === true ? 'Y' : 'N'
  }`;

  return filterBy;
};

/**
 * Función encargada de armar los filtros en la búsqueda de la reserva
 * @param filterData
 * @returns cadena filtro
 */

export const RoomsRepository = {
  /**
   * Obtiene todas los hoteles/habitaciones disponibles
   * @returns arreglo de habitaciones
   */
  findAllRooms: () => axiosIntance.get('/rooms'),
  /**
   * Obtiene todas los hoteles/habitaciones disponibles según los filtros
   * @param dataFilter filtros a aplicar
   * @returns arreglo de habitaciones
   */
  findFilterRooms: (dataFilter: IFieldsForm) =>
    axiosIntance.get(`/rooms${getDataFilter(dataFilter)}`),
};
