// Adds a new user to the store
export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user
  }
}

// Stores an user
export const selectUser = (user) => {
  return {
    type: "SELECT_USER",
    payload: user,
  }
}