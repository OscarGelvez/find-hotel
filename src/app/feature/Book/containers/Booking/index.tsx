import { fieldsFormFindBooking } from 'app/feature/Rooms/models/Room';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { BookingDetail } from '../../components/Booking';
import { DivContainer } from './styles';

interface RoomsProps {
  onFindBooking: (findBookingData: fieldsFormFindBooking) => void;
}

export const Booking: React.FC<RoomsProps> = ({ onFindBooking }) => {
  return (
    <DivContainer data-testid="room">
      <BookingDetail onFindBooking={onFindBooking} />
    </DivContainer>
  );
};

Booking.propTypes = {
  onFindBooking: PropTypes.func.isRequired,
};
