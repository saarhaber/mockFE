import axios from 'axios';


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

// Fetch Interviews
export const fetchInterviews = (interviews) => {
  return {
    type: "FETCH_INTERVIEWS",
    payload: interviews,
  }
}

// THUNK CREATOR;
export const fetchInterviewsThunk = () => (dispatch) => {
  axios.get(`https://frozen-spire-39361.herokuapp.com/api/interviews`)
  .then(res => {
      console.log(res)
    dispatch(fetchInterviews(res.data));
  })
  .catch(err => {
    console.log(err);
  })
}