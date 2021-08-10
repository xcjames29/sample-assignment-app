import { GET_DATA, GET_DATA_ERROR, GET_DATA_SUCCESS } from "../actions/detailsAction";


let initialState = {
    loading:false,
    error: "",
    currentData:{},
    otherNearby:[]
}


export default function detailsReducer(state = initialState,action){
    switch(action.type){
        case GET_DATA:
            return {...state,loading:true}
        case GET_DATA_ERROR:
            return {...state, loading:false, error:action.payload}
        case GET_DATA_SUCCESS:
            return {...state, loading:false, currentData:action.payload.current, otherNearby:action.payload.others}
        default:
            return state;
    }
}
