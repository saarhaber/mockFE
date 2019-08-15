import axios from 'axios';

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
export const fetchUsers = (users) => {
  return(dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(response => {
      dispatch({
        type: "FETCH_USERS",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot fetch data from api", error);
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