export const addRoom = (data) => {
  return {
    type: "ADD_ROOM",
    payload: data,
  };
};

export const updateRoom = (data) => {
  return {
    type: "UPDATE_ROOM",
    Data: data,
  };
};

export const deleteRoom = (id) => {
  return {
    type: "DELETE_ROOM",
    ID: id,
  };
};
