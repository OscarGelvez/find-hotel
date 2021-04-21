import {
  BOOKING_DELETED,
  BOOKING_FINDED,
  BOOKING_SELECTED_DELETE,
  IActionTypesBookings,
} from '../../actions/bookings/ActionTypesBookings';
import { IStateBookings } from '../../modelo/IStateBookings';

const initialState: IStateBookings = {
  listBookings: [],
  deleteBookingId: -1,
};

export default function (
  state = initialState,
  action: IActionTypesBookings
): IStateBookings {
  switch (action.type) {
    case BOOKING_FINDED: {
      const books = action.payload;
      return {
        ...state,
        listBookings: books,
      };
    }
    case BOOKING_DELETED: {
      const code = action.payload;
      return {
        ...state,
        listBookings:
          code === 0
            ? [
                ...state.listBookings.filter(
                  (item) => item.id !== state.deleteBookingId
                ),
              ]
            : state.listBookings,
        deleteBookingId: code === 0 ? -1 : state.deleteBookingId,
      };
    }

    case BOOKING_SELECTED_DELETE: {
      const bookiId = action.payload;
      return {
        ...state,
        deleteBookingId: bookiId,
      };
    }
    default:
      return state;
  }
}
