import * as PropTypes from 'prop-types';
import * as React from 'react';

import { RoomDetailView } from '../../components/roomDetail';
import { IRoom } from '../../models/Room';
import { IBooking } from '../../../Book/models/Booking';
import { DivContainer } from './styles';

interface IRoomsDetailProps {
  listRooms: Array<IRoom>;
  selectedRoom: number;
  saveBookingRoom?: (bookingData: IBooking) => void;
}

export const RoomDetail: React.FC<IRoomsDetailProps> = ({
  listRooms,
  selectedRoom,
  saveBookingRoom,
}) => {
  return (
    <DivContainer data-testid="room-detail">
      <RoomDetailView
        listRooms={listRooms}
        selectedRoom={selectedRoom}
        saveBookingRoom={saveBookingRoom}
      />
    </DivContainer>
  );
};

RoomDetail.propTypes = {
  listRooms: PropTypes.array.isRequired,
  selectedRoom: PropTypes.number.isRequired,
  saveBookingRoom: PropTypes.func,
};
