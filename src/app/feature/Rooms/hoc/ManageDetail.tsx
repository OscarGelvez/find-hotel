import { saveBookingRoom } from 'app/core/redux/actions/bookings/ActionBookings';
import { Istate } from 'app/core/redux/modelo/GeneralState';
import { connect } from 'react-redux';

import { RoomDetail } from '../containers/RoomDetail';

const mapStateToProps = (state: Istate) => {
  return {
    listRooms: state.rooms.listRooms,
    selectedRoom: state.rooms.selectedRoomId,
  };
};

export const ManageDetail = connect(mapStateToProps, { saveBookingRoom })(
  RoomDetail
);
