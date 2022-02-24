const initialData = {
  rooms: [],
};

export const roomReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ROOM":
      return {
        rooms: [...state.rooms, action.payload],
      };

    case "UPDATE_ROOM":
      const roomIndex = state.rooms.findIndex((room) => room.id === action.Data.id); // find room index
      let updatedRoom = [...state.rooms]; // makiung a new array of objects
      updatedRoom[roomIndex] = action.Data; // changing data in the new array for that particular booked room

      return {
        rooms: updatedRoom,
      };

    case "DELETE_ROOM":
      const tempRooms = state.rooms.filter((room) => {
        return room.id !== action.ID;
      });

      return {
        rooms: [...tempRooms],
      };

    default:
      return state;
  }
};

export default roomReducer;