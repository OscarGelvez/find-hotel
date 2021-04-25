import {
  IActionTypesMain,
  IS_LOADING,
} from '../../actions/main/ActionTypesMain';
import { IStateMain } from '../../modelo/IStateMain';

const initialState: IStateMain = {
  isLoading: false,
};

export default function (
  state = initialState,
  action: IActionTypesMain
): IStateMain {
  switch (action.type) {
    case IS_LOADING: {
      const loading = action.payload;
      return {
        ...state,
        isLoading: loading,
      };
    }

    default:
      return state;
  }
}
