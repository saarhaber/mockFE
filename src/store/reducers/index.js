import {combineReducers} from 'redux';

const users_ = [
  {
    id:1,
    firstName: "Ajani",
    lastName: "Stewart",
    imageUrl: "https://media.licdn.com/dms/image/C4E03AQEJu9M_1KwiSQ/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=K1hQTxvdOAuEk23OMrM232t-bx3l4sx12UxLazK_vUc",
    email: "email@email.com",
    organization: "Hunter College",
    description: "Student Web Developer paitentily waiting for the heat death of the universe",
    profession: "student",
    interviewAmount: 3,
    lastInterview: (new Date()).toISOString(),
    isInterviewer: false
  },
  {    id:2,
    firstName: "John",
    lastName: "Cline",
    imageUrl: 'http://3.bp.blogspot.com/-hrebbdHVnMs/T_xetr5DAHI/AAAAAAAAAzo/CODjoTjZh7Y/s1600/cat+10.jpg',
    email: "john@cline.com",
    organization: "Google",
    description: "Big Brain",
    profession: "web developer",
    interviewAmount: 10,
    lastInterview: (Date.now()/1000),
    isInterviewer: true
  },
  {    id:3,
    firstName: "Kim",
    lastName: "Wong",
    imageUrl: null,
    email: "kim.wong@email.com",
    organization: "Bloomberg",
    description: "Bigger Brain",
    profession: "software engineer",
    interviewAmount: 8,
    lastInterview: (Date.now()/1000),
    isInterviewer: true
  }]

// reducer: list of users
const userReducer = (users = users_, action) => {
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