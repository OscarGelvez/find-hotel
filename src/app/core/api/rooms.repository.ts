import { BookingData, fieldsForm } from 'app/feature/Rooms/models/Room';

import { axiosIntance } from '../config/AxiosConfig';

// const NUMERO_REGISTROS = 10;
// const limit = (count: number, p: number) =>
//   `limit=${count}&offset=${p ? p * count : 0}`;

const getDataFilter = (data: fieldsForm) => {
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

const headers = {
  'Content-Type': 'application/json',
};

export const RoomsRepository = {
  findAllRooms: () => axiosIntance.get('/rooms'),
  findFilterRooms: (dataFilter: fieldsForm) =>
    axiosIntance.get(`/rooms${getDataFilter(dataFilter)}`),
  saveBookingRoom: (bookingData: BookingData) =>
    axiosIntance.post('/booking', bookingData, {
      headers: headers,
    }),
};
