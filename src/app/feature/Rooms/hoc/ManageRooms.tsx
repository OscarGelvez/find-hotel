import { listingRoomsAsync } from 'app/core/redux/actions/rooms/ActionsRooms';
import { Istate } from 'app/core/redux/modelo/GeneralState';
import { Rooms } from '../containers/Rooms';
import { connect } from 'react-redux';

const mapStateToProps = (state: Istate) => {
  return { listRooms: state.rooms.listRooms };
};

export const ManageRooms = connect(mapStateToProps, {
  listAvailableRooms: listingRoomsAsync,
})(Rooms);
