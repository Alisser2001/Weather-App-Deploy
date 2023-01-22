import infoValidator from "./infoValidator";

let initialState = {
    city: undefined
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case "GET_INFO_BY_CITY":
            return {
                ...state,
                city: infoValidator(action.payload)
            }
        case "GET_INFO_BY_CITY_AND_COUNTRY":
            return {
                ...state,
                city: infoValidator(action.payload)
            }
        case "DELETE_INFO":
            return {
                ...state,
                city: undefined
            }
        default:
            return {
                ...state
            }
    }
}