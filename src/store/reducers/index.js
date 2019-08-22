import {combineReducers} from 'redux';

// reducer: list of users
const userReducer = (users = [], action) => {
  switch(action.type) {
    case "ADD_USER":
      users.push(action.payload);
      return users;
    case "FETCH_USERS":
      return action.payload;
    default:
      return users;
  }
}

// reducer: selected user
const userSelectReducer = (user = {}, action) => {
  switch(action.type) {
    case "SELECT_USER":
      return action.payload;
    default:
      return user;
  }
}

const serverResponseReducer = (serverResponse = {}, action) => {
  switch(action.type) {
    case "SAVE_RESPONSE":
      return action.payload;
    default:
      return serverResponse;
  }
}

// reducer: list of interviews
const interviewReducer = (interviews = [], action) => {
  switch(action.type) {
    case "FETCH_INTERVIEWS":
      return action.payload;
    case "ADD_INTERVIEW":
      interviews.push(action.payload);
      return interviews;
    default:
      return interviews;
  }
}

// reducer: selected interview
const interviewSelectReducer = (interview = {}, action) => {
  switch(action.type) {
    case "SELECT_INTERVIEW":
      return action.payload;
    case "BOOK_INTERVIEW":
      console.log("BOOK INTERVIEW REDUCER CALLED")
      return {...interview, studentId: action.payload}
    case "UNBOOK_INTERVIEW":
      return {...interview, studentId: null}
    default:
      return interview;
  }
}

export default combineReducers({
  users: userReducer,
  user: userSelectReducer,
  interviews: interviewReducer,
  interview: interviewSelectReducer,
  serverResponse: serverResponseReducer,
});