import { IBookingData, IFieldsForm } from 'app/feature/Rooms/models/Room';

import { axiosIntance } from '../config/AxiosConfig';

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

const headers = {
  'Content-Type': 'application/json',
};

export const RoomsRepository = {
  findAllRooms: () => axiosIntance.get('/rooms'),
  findFilterRooms: (dataFilter: IFieldsForm) =>
    axiosIntance.get(`/rooms${getDataFilter(dataFilter)}`),
  saveBookingRoom: (bookingData: IBookingData) =>
    axiosIntance.post('/booking', bookingData, {
      headers: headers,
    }),
};
