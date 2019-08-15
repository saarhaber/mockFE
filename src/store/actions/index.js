const TAG = "ACTIONS/INDEX_JS";

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

export const updateUserList = (users) => {
  return {
    type: "UPDATE_USER_LIST",
    payload: users
  }
}

// Adds a new interview to the store
export const addInterview = (interview) => {
  return {
    type: "ADD_INTERVIEW",
    payload: interview
  }
}

// Stores a single interview
export const selectInterview = (interview) => {
  return {
    type: "SELECT_INTERVIEW",
    payload: interview,
  }
}