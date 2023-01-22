import axios from "axios";
const { REACT_APP_API_KEY } = process.env;


export function getInfoByCity(city) {
    return async function (dispatch) {
        let json = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`);
        return dispatch({
            type: "GET_INFO_BY_CITY",
            payload: json.data
        })
    }
}
export function getInfoByCityAndCountry(payload) {
    return async function (dispatch) {
        let json = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload.city},${payload.country}&appid=${REACT_APP_API_KEY}&units=metric`);
        return dispatch({
            type:"GET_INFO_BY_CITY_AND_COUNTRY",
            payload: json.data
        })
    }
}
export function deleteInfo(payload){
    return async function (dispatch){
        return dispatch({
            type: "DELETE_INFO",
        })
    }
}