import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    taskContainer : taskReducer,
});

export default rootReducer;