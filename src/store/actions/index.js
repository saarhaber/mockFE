import axios from 'axios';

const TAG = "ACTIONS/INDEX_JS";

// Adds a new user to the store
export const addUser = (user) => async (dispatch) => {
  await axios.post('https://frozen-spire-39361.herokuapp.com/api/users/', {
    firstName: user.firstname,
    lastName: user.lastname,
    imageUrl: user.imageUrl,
    email: user.email,
    password: user.password,
    organization: user.organization,
    description: user.description,
    profession: user.profession,
    interviewAmount: user.interviewAmount,
    lastInterview: user.lastInterview,
    isInterviewer: user.isInterviewer
  })
    .then(user => {
      dispatch({
        type: "ADD_USER",
        payload: user.sata
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot add user to api", error);
    })
  }


// Stores an user
export const selectUser = (user) => {
  return {
    type: "SELECT_USER",
    payload: user,
  }
}

export const fetchUsers = () => {
  return(dispatch) => {
    axios.get('https://frozen-spire-39361.herokuapp.com/api/users/')
    .then(response => {
      dispatch({
        type: "FETCH_USERS",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot fetch users from api", error);
    })
  }
}

export const fetchInterviews = () => {
  return(dispatch) => {
    axios.get('https://frozen-spire-39361.herokuapp.com/api/interviews/')
    .then(response => {
      dispatch({
        type: "FETCH_INTERVIEWS",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot fetch interviews from api", error);
    })
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