import { combineReducers } from 'redux';

import bookings from './bookings/bookingReducer';
import rooms from './rooms/roomsReducers';

export default combineReducers({ rooms, bookings });
