import {combineReducers} from 'redux';

// reducer: list of users
const userReducer = (users = [], action) => {
  switch(action.type) {
    case "ADD_USER":
      users.push(action.payload);
      return users;
    default:
      return users;
  }
}

const userSelectReducer = (user = {}, action) => {
  switch(action.type) {
    case "SELECT_USER":
      return action.payload;
    default:
      return user;
  }
}

export default combineReducers({
  users: userReducer,
  user: userSelectReducer
});