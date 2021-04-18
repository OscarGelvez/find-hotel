import { onFindBooking } from 'app/core/redux/actions/rooms/ActionsRooms';
import { Istate } from 'app/core/redux/modelo/GeneralState';
import { connect } from 'react-redux';

import { Booking } from '../containers/Booking';

const mapStateToProps = (state: Istate) => {
  return {
    listRooms: state.rooms.listRooms,
    selectedRoom: state.rooms.selectedRoomId,
  };
};

export const ManageBooking = connect(mapStateToProps, { onFindBooking })(
  Booking
);
