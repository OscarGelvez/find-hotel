import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer } from './styles';
import { RoomDetailView } from '../../components/roomDetail';
// import { PaginadorProductos } from '../../components/PaginadorProductos';
import { IRoom, fieldsForm } from '../../models/Room';
import { useEffect } from 'react';
import { FindRooms } from '../../components/findRooms';

interface RoomsDetailProps {
  listRooms: Array<IRoom>;
  selectedRoom: number;
}

export const RoomDetail: React.FC<RoomsDetailProps> = ({
  listRooms,
  selectedRoom,
}) => {
  return (
    <DivContainer>
      <RoomDetailView listRooms={listRooms} selectedRoom={selectedRoom} />
    </DivContainer>
  );
};

RoomDetail.propTypes = {
  listRooms: PropTypes.array.isRequired,
  selectedRoom: PropTypes.number.isRequired,
};
