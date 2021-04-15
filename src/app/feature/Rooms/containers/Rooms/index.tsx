import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer } from './styles';
import { ListRooms } from '../../components/ListRooms';
// import { PaginadorProductos } from '../../components/PaginadorProductos';
import { IRoom, fieldsForm } from '../../models/Room';
import { useEffect } from 'react';
import { FindRooms } from '../../components/findRooms';

interface RoomsProps {
  listRooms: Array<IRoom>;
  listAvailableRooms: () => void;
  findRoomsFilter: (data: fieldsForm) => void;
}

export const Rooms: React.FC<RoomsProps> = ({
  listRooms,
  listAvailableRooms,
  findRoomsFilter,
}) => {
  useEffect(() => {
    if (listRooms && listRooms.length === 0) {
      listAvailableRooms();
    }
  }, [listRooms, listAvailableRooms]);

  // const onFindRoom = (values: fieldsForm) => {
  //   console.log(values);
  // };
  return (
    <DivContainer>
      <FindRooms onSubmit={findRoomsFilter} />
      <ListRooms listRooms={listRooms} />
    </DivContainer>
  );
};

Rooms.propTypes = {
  listRooms: PropTypes.array.isRequired,
  listAvailableRooms: PropTypes.func.isRequired,
  findRoomsFilter: PropTypes.func.isRequired,
};
