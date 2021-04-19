import * as PropTypes from 'prop-types';
import * as React from 'react';

import { FindRooms } from '../../components/findRooms';
import { ListRooms } from '../../components/ListRooms';
import { IFieldsForm, IRoom } from '../../models/Room';
import { DivContainer } from './styles';

interface RoomsProps {
  listRooms: Array<IRoom>;
  listAvailableRooms: () => void;
  findRoomsFilter: (data: IFieldsForm) => void;
  loadDetailRoom: (roomId: number) => void;
}

export const Rooms: React.FC<RoomsProps> = ({
  listRooms,
  listAvailableRooms,
  findRoomsFilter,
  loadDetailRoom,
}) => {
  React.useEffect(() => {
    if (listRooms && listRooms.length === 0) {
      listAvailableRooms();
    }
  }, [listRooms, listAvailableRooms]);

  return (
    <DivContainer data-testid="room">
      <FindRooms
        onSubmit={findRoomsFilter}
        listAvailableRooms={listAvailableRooms}
      />
      <ListRooms listRooms={listRooms} loadDetailRoom={loadDetailRoom} />
    </DivContainer>
  );
};

Rooms.propTypes = {
  listRooms: PropTypes.array.isRequired,
  listAvailableRooms: PropTypes.func.isRequired,
  findRoomsFilter: PropTypes.func.isRequired,
  loadDetailRoom: PropTypes.func.isRequired,
};
