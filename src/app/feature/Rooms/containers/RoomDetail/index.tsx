import * as PropTypes from 'prop-types';
import * as React from 'react';

import { IBooking } from '../../../Book/models/Booking';
import { RoomDetailView } from '../../components/roomDetail';
import { IRoom } from '../../models/Room';
import { DivContainer } from './styles';

interface IRoomsDetailProps {
  listRooms: Array<IRoom>;
  selectedRoom: number;
  saveBookingRoom?: (bookingData: IBooking) => void;
  isLoading: boolean;
}

export const RoomDetail: React.FC<IRoomsDetailProps> = ({
  listRooms,
  selectedRoom,
  saveBookingRoom,
  isLoading,
}) => {
  return (
    <DivContainer data-testid="room-detail">
      <RoomDetailView
        listRooms={listRooms}
        selectedRoom={selectedRoom}
        saveBookingRoom={saveBookingRoom}
        isLoading={isLoading}
      />
    </DivContainer>
  );
};

RoomDetail.propTypes = {
  listRooms: PropTypes.array.isRequired,
  selectedRoom: PropTypes.number.isRequired,
  saveBookingRoom: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};
