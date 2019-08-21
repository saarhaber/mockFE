import axios from 'axios';

const TAG = "ACTIONS/INDEX_JS";

const dev_api = 'http://localhost:5000/api';
const prod_api = 'https://frozen-spire-39361.herokuapp.com/api';

// login
export const login = (login) => {
  return(dispatch) => {
    axios.post(prod_api +'/auth/login', login, {withCredentials: true})
    .then(response => {
      dispatch({
        type: 'SAVE_RESPONSE',
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

// login
export const logout = () => {
  return(dispatch) => {
    axios.post(prod_api + '/auth/logout/', {}, {withCredentials: true})
    .then(response => {
      dispatch({
        type: 'SAVE_RESPONSE',
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
    axios.post(prod_api + '/auth/signup', user)
    .then(response => {
      dispatch({
        type: 'SAVE_RESPONSE',
        payload: response.data
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
    axios.get(prod_api + '/auth/me',{withCredentials: true})
    .then(response => {
      dispatch({
        type: 'SELECT_USER',
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Can't get user", error);
    })
  }
}

export const fetchUsers = () => {
  return(dispatch) => {
    axios.get(prod_api +'/users/')
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
    axios.delete(prod_api +'/users/' + user.id)
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
export const editUser = (id, newUser) => {
  console.log("starting action newUser")
  return(dispatch) => {
    axios.put(prod_api+'/users/' + id, newUser, {
      withCredentials: true
    })
    .then(response => {
      dispatch({
        type: "SERVER_RESPONSE",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot post user to api", error);
    })
  }
}

export const getUserById = id => async dispatch => {
  try {
    let { data } = await axios.get(`${prod_api}/users/${id}`);
    dispatch({type: "SELECT_USER", payload: data});
  } catch (err) {
    console.error(err);
  }
}

// ---------- Interview action creators ----------

export const fetchInterviews = () => {
  return(dispatch) => {
    axios.get(prod_api+'/interviews/')
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
    axios.post(prod_api + '/interviews/', interview)
    .then(response => {
      dispatch({
        type: "SERVER_RESPONSE",
        payload: response.data
      })
    })
    .catch(error => {
      console.log(TAG, "Cannot POST interview to api", error);
    });
  }
}

export const bookInterview = (interviewId, body) => async dispatch => {
  console.log("BOOK INTERVIEW CALLED")
  try {
    console.log("HELOOO" + body.studentId)
    await axios.put(`${prod_api}/interviews/${interviewId}`, body);
    dispatch({type: "BOOK_INTERVIEW", payload: body.studentId});
  } catch (err) {
    console.error(err)
  }
}

// Deletes an interview
export const deleteInterview = (interview) => {
  return(dispatch) => {
    axios.delete(prod_api+'/interviews/' + interview.id)
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
export const editInterview = (id, newInterview) => {
  console.log("Calling edit interview")
  return(dispatch) => {
    axios.put(prod_api + '/interviews/' + id, newInterview)
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