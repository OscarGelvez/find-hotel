import { Istate } from 'app/core/redux/modelo/GeneralState';
import { RoomDetail } from '../containers/RoomDetail';
import { connect } from 'react-redux';

const mapStateToProps = (state: Istate) => {
  console.log(state.selectedRoom);
  return {
    listRooms: state.rooms.listRooms,
    selectedRoom: state.rooms.selectedRoomId,
  };
};

export const ManageDetail = connect(mapStateToProps)(RoomDetail);
