import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer Functions;
import students from "./utilities/students";
import campuses from "./utilities/campuses";
import singlecampus from "./utilities/singlecampus"
import singlestudent from "./utilities/singlestudent"

const rootReducer = combineReducers({students, campuses, singlecampus, singlestudent});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

export default store;