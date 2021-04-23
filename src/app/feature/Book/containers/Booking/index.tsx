import {
  IBooking,
  IFieldsFormFindBooking,
} from 'app/feature/Book/models/Booking';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { FindBookingForm } from '../../components/findBooking';
import { ListBookings } from '../../components/listBooking';
import { DivContainer } from './styles';

interface IBookingsProps {
  findBooking: (findBookingData: IFieldsFormFindBooking) => void;
  listBookingsFinded: Array<IBooking>;
  cancelBooking: (bookId: number) => void;
  isLoading: boolean;
}

export const Booking: React.FC<IBookingsProps> = ({
  findBooking,
  listBookingsFinded,
  cancelBooking,
  isLoading,
}) => {
  return (
    <DivContainer data-testid="book">
      <FindBookingForm onFindBooking={findBooking} />
      <ListBookings
        listBookingsFinded={listBookingsFinded}
        cancelBooking={cancelBooking}
        isLoading={isLoading}
      />
    </DivContainer>
  );
};

Booking.propTypes = {
  findBooking: PropTypes.func.isRequired,
  listBookingsFinded: PropTypes.array.isRequired,
  cancelBooking: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
