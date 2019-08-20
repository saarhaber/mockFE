import axios from 'axios';

const TAG = "ACTIONS/INDEX_JS";

// login
export const login = (login) => {
  return(dispatch) => {
    axios.put('http://localhost:5000/api/users', login)
    .then(response => {
      dispatch({
        type: 'SAVE_RESPONSE',
        payload: response.data
      })
      dispatch({//temporary
        type: 'SELECT_USER',
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot login", error);
      dispatch({
        type: 'SAVE_RESPONSE',
        payload: {
          message: 'Error communicating with server'
        }
      })
    })
  }
}

// Signup
export const signup = (user) => {
  return (dispatch) => {
    axios.post('https://frozen-spire-39361.herokuapp.com/api/auth/signup', user)
    .then(response => {
      dispatch({
        type: 'SAVE_RESPONSE',
        payload: response.body
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot create user", error);
    })
  }
}

// ---------- User action creators ----------

// Stores an user
export const getUser = () => {
  return (dispatch) => {
    axios.get('https://frozen-spire-39361.herokuapp.com/api/auth/me')
    .then(response => {
      dispatch({
        type: 'SELECT_USER',
        payload: response.body
      })
    })
    .catch(error => {
      console.log(TAG, "Can't get user", error);
    })
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

// Deletes an user
export const deleteUser = (user) => {
  return(dispatch) => {
    axios.delete('https://frozen-spire-39361.herokuapp.com/api/users/' + user.id)
    .then(response => {
      dispatch({
        type: "NONE",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot post user to api", error);
    })
  }
}

// Edits an user
export const editUser = (user, newUser) => {
  return(dispatch) => {
    axios.put('https://frozen-spire-39361.herokuapp.com/api/users/' + user.id, newUser)
    .then(response => {
      dispatch({
        type: "NONE",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot post user to api", error);
    })
  }
}

// ---------- Interview action creators ----------

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
  return(dispatch) => {
    axios.post('https://frozen-spire-39361.herokuapp.com/api/interviews/', interview)
    .then(response => {
      dispatch({
        type: "FETCH_INTERVIEWS",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot POST  interview to api", error);
    });
  }
}

// Deletes an interview
export const deleteInterview = (interview) => {
  return(dispatch) => {
    axios.delete('https://frozen-spire-39361.herokuapp.com/api/interviews/' + interview.id)
    .then(response => {
      dispatch({
        type: "NONE",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot DELETE interview from api", error);
    });
  }
}

// Edit an interview
export const editInterview = (interview, newInterview) => {
  return(dispatch) => {
    axios.put('https://frozen-spire-39361.herokuapp.com/api/interviews/' + interview.id, newInterview)
    .then(response => {
      dispatch({
        type: "NONE",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot PUT interview to api", error);
    });
  }
}

// Stores a single interview
export const selectInterview = (interview) => {
  return {
    type: "SELECT_INTERVIEW",
    payload: interview,
  }
}