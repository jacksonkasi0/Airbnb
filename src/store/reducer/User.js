const initialState = {
  users: {
    name: "",
    email: "",
    phoneNo: "",
    aadharNo: "",
    address: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
