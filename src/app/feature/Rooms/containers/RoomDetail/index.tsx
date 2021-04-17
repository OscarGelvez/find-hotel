import * as PropTypes from 'prop-types';
import * as React from 'react';

import { RoomDetailView } from '../../components/roomDetail';
import { BookingData, IRoom } from '../../models/Room';
import { DivContainer } from './styles';

interface RoomsDetailProps {
  listRooms: Array<IRoom>;
  selectedRoom: number;
  saveBookingRoom?: (bookingData: BookingData) => void;
}

export const RoomDetail: React.FC<RoomsDetailProps> = ({
  listRooms,
  selectedRoom,
  saveBookingRoom,
}) => {
  return (
    <DivContainer>
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
