import { IRoom } from '../../../../feature/Rooms/models/Room';
import {
  bookingRoomSaved,
  listingRooms,
  loadDetailRoom,
} from '../../actions/rooms/ActionsRooms';
import { IStateRooms } from '../../modelo/IStateRooms';
import roomsReducers from './roomsReducers';

const newRoom: IRoom = {
  id: 50,
  title: 'Suite full. Caroline',
  image: 'https://static.abc.es/Media/201504/27/hotel12--644x362.jpg',
  hotel: {
    id: 1,
    name: 'Gold Hotel 5',
    address: 'Calle 54 # 56 -32 Av Libre',
    stars: 4,
    description:
      'Hotel con ambiente familiar, increible opción. Muchas comodidades',
    score: 8.7,
  },
  value: '154.000',
  ac: 'Y',
  parking: 'Y',
  available_from: '2021-04-13',
  available_until: '2021-04-30',
  wifi: 'Y',
  capacity: 1,
  description: 'Baño privado, cama doble, con nevera, Wifi, TV.',
};

describe('Reductor de habitaciones', () => {
  it('debería retornar todas las habitaciones obtenidas', () => {
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: -1,
    };
    const expectedState: IStateRooms = {
      ...initialState,
      listRooms: [newRoom],
    };

    const newState = roomsReducers(initialState, listingRooms([newRoom]));
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería retornar las habitaciones filtradas', () => {
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: -1,
    };
    const expectedState: IStateRooms = {
      ...initialState,
      listRooms: [newRoom],
    };

    const newState = roomsReducers(initialState, listingRooms([newRoom]));
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería almacenar el identificador de la habitación seleccionada', () => {
    const selectedRoomId = 56;
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: -1,
    };
    const expectedState: IStateRooms = {
      ...initialState,
      selectedRoomId: selectedRoomId,
    };

    const newState = roomsReducers(
      initialState,
      loadDetailRoom(selectedRoomId)
    );
    expect(newState).toStrictEqual(expectedState);
  });

  it('debería setear por defecto el valor de la habitación seleccionada', () => {
    const roomId = 5;
    const initialState: IStateRooms = {
      listRooms: [],
      selectedRoomId: 56,
    };
    const expectedState: IStateRooms = {
      ...initialState,
      selectedRoomId: 56,
    };

    const newState = roomsReducers(initialState, bookingRoomSaved(roomId));
    expect(newState).toStrictEqual(expectedState);
  });
});
