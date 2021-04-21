import {
  cancelBooking,
  findBooking,
} from 'app/core/redux/actions/bookings/ActionBookings';
import { Istate } from 'app/core/redux/modelo/GeneralState';
import { connect } from 'react-redux';

import { Booking } from '../containers/Booking';

const mapStateToProps = (state: Istate) => {
  return {
    listBookingsFinded: state.bookings.listBookings,
  };
};

export const ManageBooking = connect(mapStateToProps, {
  findBooking,
  cancelBooking,
})(Booking);
