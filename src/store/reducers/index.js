import {combineReducers} from 'redux';

const interviews_ = [

];


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

// reducer: list of interviews
const interviewReducer = (interviews = interviews_, action) => {
  switch(action.type) {
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
    default:
      return interview;
  }
}

export default combineReducers({
  users: userReducer,
  user: userSelectReducer,
  interviews: interviewReducer,
  interview: interviewSelectReducer
});