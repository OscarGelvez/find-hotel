import { IFieldsFormFindBooking } from 'app/feature/Rooms/models/Room';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { BookingDetail } from '../../components/Booking';
import { DivContainer } from './styles';

interface IRoomsProps {
  onFindBooking: (findBookingData: IFieldsFormFindBooking) => void;
}

export const Booking: React.FC<IRoomsProps> = ({ onFindBooking }) => {
  return (
    <DivContainer data-testid="room">
      <BookingDetail onFindBooking={onFindBooking} />
    </DivContainer>
  );
};

Booking.propTypes = {
  onFindBooking: PropTypes.func.isRequired,
};
