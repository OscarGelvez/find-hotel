import { IStateMain } from './core/redux/modelo/IStateMain';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { IStateBookings } from './core/redux/modelo/IStateBookings';
import { IStateRooms } from './core/redux/modelo/IStateRooms';
import { bookInfo } from './shared/utils/dataBooks';
import { roomInfo } from './shared/utils/data';
import { IBooking } from './feature/Book/models/Booking';
import { IRoom } from './feature/Rooms/models/Room';
import App from './App';
import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';
import { shallow } from 'enzyme';

const mockStore = configureStore([]);

const newBook: IBooking = bookInfo;
const listBookings: IBooking[] = [newBook];

const newRoom: IRoom = roomInfo;
const listRooms: IRoom[] = [newRoom];

const rooms: IStateRooms = {
  listRooms,
  selectedRoomId: -1,
};

const bookings: IStateBookings = {
  listBookings,
  deleteBookingId: -1,
};

const main: IStateMain = {
  isLoading: false,
};

describe('Prueba componente App con redux', () => {
  let store;

  let wrapper;
  beforeEach(() => {
    store = mockStore({
      bookings,
      main,
      rooms,
    });

    wrapper = shallow(
      <GlobalErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </GlobalErrorBoundary>
    );
  });
  it('Compara snapshot del componente App renderizado', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
