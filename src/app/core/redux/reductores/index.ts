import { combineReducers } from 'redux';

import bookings from './bookings/bookingReducer';
import rooms from './rooms/roomsReducers';
import main from './main/mainReducer';

export default combineReducers({ rooms, bookings, main });
