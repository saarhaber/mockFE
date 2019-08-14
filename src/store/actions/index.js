// Adds a new user to the store
export const addUser = (user) => {
  type: "ADD_USER";
  payload: user;
}

// Stores an user
export const selectUser = (user) => {
  type: "SELECT_USER";
  payload: user;
}