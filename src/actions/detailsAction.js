export const GET_DATA = "GET_DATA";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";


export const getData = ()=>({
    type: GET_DATA
})

export const getDataError = (error) =>({
    type: GET_DATA_ERROR,
    payload: error
})

export const getDataSuccess = (data) =>({
    type: GET_DATA_SUCCESS,
    payload: data
})

const URL = "https://assignment-backend-clark.herokuapp.com/details"

export const getDataFromAPI = ()=>{
    return async function (dispatch,getState,args){
        try{
            dispatch(getData());
            let response = await fetch(URL);
            let data = await response.json();
            dispatch(getDataSuccess(data));
        }
        catch(e){
            console.log(e.message);
            dispatch(getDataError(e.message));
        }
    }
}
