import { RoomsRepository } from 'app/core/api/rooms.repository';
import {
  BookingData,
  fieldsForm,
  fieldsFormFindBooking,
  IRoom,
} from 'app/feature/Rooms/models/Room';

import {
  ActionTypesRooms,
  BOOKING_ROOM_SAVED,
  FINDED_ROOMS,
  LIST_ROOMS,
  LOAD_ROOM_DETAIL,
} from './ActionTypesRooms';

export function listingRooms(rooms: Array<IRoom>): ActionTypesRooms {
  return {
    type: LIST_ROOMS,
    payload: rooms,
  };
}

export function roomsFiltered(rooms: Array<IRoom>): ActionTypesRooms {
  return {
    type: FINDED_ROOMS,
    payload: rooms,
  };
}

export function loadDetailRoom(roomId: number): ActionTypesRooms {
  return {
    type: LOAD_ROOM_DETAIL,
    payload: roomId,
  };
}

export function bookingRoomSaved(roomId: number): ActionTypesRooms {
  return {
    type: BOOKING_ROOM_SAVED,
    payload: roomId,
  };
}

export function listingRoomsAsync() {
  return function (dispacth: any) {
    RoomsRepository.findAllRooms().then((response: any) => {
      return dispacth(listingRooms(response.data));
    });
  };
}

export function findRoomsFilter(dataFilter: fieldsForm) {
  return function (dispacth: any) {
    RoomsRepository.findFilterRooms(dataFilter).then((response: any) => {
      return dispacth(roomsFiltered(response.data));
    });
  };
}

export function saveBookingRoom(bookingData: BookingData) {
  return function (dispacth: any) {
    RoomsRepository.saveBookingRoom(bookingData).then((response: any) => {
      return dispacth(bookingRoomSaved(response.data.id));
    });
  };
}

export function onFindBooking(findBookingData: fieldsFormFindBooking) {
  return function (dispacth: any) {
    return null;
    // RoomsRepository.saveBookingRoom(bookingData).then((response: any) => {
    //   return dispacth(bookingRoomSaved(response.data.id));
    // });
  };
}
