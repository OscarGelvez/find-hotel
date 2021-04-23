import {
  findRoomsFilter,
  listingRoomsAsync,
  loadDetailRoom,
} from 'app/core/redux/actions/rooms/ActionsRooms';
import { Istate } from 'app/core/redux/modelo/GeneralState';
import { connect } from 'react-redux';

import { Rooms } from '../containers/Rooms';

const mapStateToProps = (state: Istate) => {
  return { listRooms: state.rooms.listRooms, isLoading: state.main.isLoading };
};

export const ManageRooms = connect(mapStateToProps, {
  listAvailableRooms: listingRoomsAsync,
  findRoomsFilter,
  loadDetailRoom,
})(Rooms);
