import { combineReducers } from 'redux';

import rooms from './rooms/roomsReducers';
import bookings from './bookings/bookingReducer';

export default combineReducers({ rooms, bookings });
