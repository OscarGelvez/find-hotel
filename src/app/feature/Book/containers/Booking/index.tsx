import { IErrorToast } from 'app/core/redux/modelo/IStateMain';
import {
  IBooking,
  IFieldsFormFindBooking,
} from 'app/feature/Book/models/Booking';
import ToastError from 'app/shared/components/ToastError';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { toast } from 'react-toastify';

import { FindBookingForm } from '../../components/findBooking';
import { ListBookings } from '../../components/listBooking';
import { DivContainer } from './styles';

interface IBookingsProps {
  findBooking: (findBookingData: IFieldsFormFindBooking) => void;
  listBookingsFinded: Array<IBooking>;
  cancelBooking: (bookId: number) => void;
  isLoading: boolean;
  errorMessage: IErrorToast;
}

export const Booking: React.FC<IBookingsProps> = ({
  findBooking,
  listBookingsFinded,
  cancelBooking,
  isLoading,
  errorMessage,
}) => {
  React.useEffect(() => {
    if (errorMessage.message !== '') {
      errorMessage.type === 'books' && toast.error(errorMessage.message);
    }
  }, [errorMessage]);
  return (
    <DivContainer data-testid="book">
      <ToastError />
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
  errorMessage: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
