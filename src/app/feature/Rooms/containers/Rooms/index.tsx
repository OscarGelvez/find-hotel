import { IErrorToast } from 'app/core/redux/modelo/IStateMain';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { toast } from 'react-toastify';

import ToastError from '../../../../shared/components/ToastError';
import { FindRooms } from '../../components/findRooms';
import { ListRooms } from '../../components/ListRooms';
import { IFieldsForm, IRoom } from '../../models/Room';
import { DivContainer } from './styles';

interface RoomsProps {
  listRooms: Array<IRoom>;
  listAvailableRooms: () => void;
  findRoomsFilter: (data: IFieldsForm) => void;
  loadDetailRoom: (roomId: number) => void;
  isLoading: boolean;
  errorMessage: IErrorToast;
}

export const Rooms: React.FC<RoomsProps> = ({
  listRooms,
  listAvailableRooms,
  findRoomsFilter,
  loadDetailRoom,
  isLoading,
  errorMessage,
}) => {
  React.useEffect(() => {
    if (listRooms && listRooms.length === 0 && errorMessage.message === '') {
      listAvailableRooms();
    }
  }, [listRooms, listAvailableRooms, errorMessage]);

  React.useEffect(() => {
    if (errorMessage.message !== '') {
      errorMessage.type === 'rooms'
        ? toast.error(errorMessage.message)
        : errorMessage.type === 'rooms-filter' &&
          toast.info(errorMessage.message);
    }
  }, [errorMessage]);

  return (
    <DivContainer data-testid="room">
      <ToastError />
      <FindRooms
        onSubmit={findRoomsFilter}
        listAvailableRooms={listAvailableRooms}
      />
      <ListRooms
        listRooms={listRooms}
        loadDetailRoom={loadDetailRoom}
        isLoading={isLoading}
      />
    </DivContainer>
  );
};

Rooms.propTypes = {
  listRooms: PropTypes.array.isRequired,
  listAvailableRooms: PropTypes.func.isRequired,
  findRoomsFilter: PropTypes.func.isRequired,
  loadDetailRoom: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
