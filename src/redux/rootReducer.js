import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";



export const rootReducer = combineReducers({detailState:detailsReducer})