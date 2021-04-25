import { combineReducers } from 'redux';

import bookings from './bookings/bookingReducer';
import main from './main/mainReducer';
import rooms from './rooms/roomsReducers';

export default combineReducers({ rooms, bookings, main });
