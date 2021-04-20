import { IActionTypesBookings } from '../../actions/bookings/ActionTypesBookings';
import { IStateBookings } from '../../modelo/IStateBookings';

const initialState: IStateBookings = {
  listBookings: [],
};

export default function (
  state = initialState,
  action: IActionTypesBookings
): IStateBookings {
  switch (action.type) {
    case 'RESERVAS_ENCONTRADAS': {
      const books = action.payload;
      return {
        ...state,
        listBookings: books,
      };
    }

    default:
      return state;
  }
}
