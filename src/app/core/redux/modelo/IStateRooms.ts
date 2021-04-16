import { IRoom } from 'app/feature/Rooms/models/Room';

export interface IStateRooms {
  listRooms: IRoom[];
  selectedRoomId: number;
}
