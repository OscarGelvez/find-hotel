import * as PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from 'react';

import { FindRooms } from '../../components/findRooms';
import { ListRooms } from '../../components/ListRooms';
// import { PaginadorProductos } from '../../components/PaginadorProductos';
import { fieldsForm,IRoom } from '../../models/Room';
import { DivContainer } from './styles';

interface RoomsProps {
  listRooms: Array<IRoom>;
  listAvailableRooms: () => void;
  findRoomsFilter: (data: fieldsForm) => void;
  loadDetailRoom: (roomId: number) => void;
}

export const Rooms: React.FC<RoomsProps> = ({
  listRooms,
  listAvailableRooms,
  findRoomsFilter,
  loadDetailRoom,
}) => {
  useEffect(() => {
    if (listRooms && listRooms.length === 0) {
      listAvailableRooms();
    }
  }, [listRooms, listAvailableRooms]);

  // const onFindRoom = (roomId: number) => {
  //   console.log(roomId);
  // };
  return (
    <DivContainer>
      <FindRooms onSubmit={findRoomsFilter} />
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
