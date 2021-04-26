import { IErrorToast } from 'app/core/redux/modelo/IStateMain';
import ToastError from 'app/shared/components/ToastError';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { IBooking } from '../../../Book/models/Booking';
import { RoomDetailView } from '../../components/roomDetail';
import { IRoom } from '../../models/Room';
import { DivContainer } from './styles';

interface IRoomsDetailProps {
  listRooms: Array<IRoom>;
  selectedRoom: number;
  saveBookingRoom?: (bookingData: IBooking) => void;
  isLoading: boolean;
  errorMessage: IErrorToast;
}

export const RoomDetail: React.FC<IRoomsDetailProps> = ({
  listRooms,
  selectedRoom,
  saveBookingRoom,
  isLoading,
  errorMessage,
}) => {
  React.useEffect(() => {
    if (errorMessage.message !== '') {
      errorMessage.type === 'rooms-save-book' &&
        toast.error(errorMessage.message);
    }
  }, [errorMessage]);

  return (
    <DivContainer data-testid="room-detail">
      <ToastError />
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
  errorMessage: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
