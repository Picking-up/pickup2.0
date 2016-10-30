import { convertAddress } from '../utils/helper';


export const ALL_EVENTS = "ALL_EVENTS";
export const SEARCH_COORD = "SEARCH_COORD";

export const searchEvents = (props) => {
  return (dispatch) => {
    convertAddress(props)
    .then((coord) => {
      console.log("COORDINATE: ", coord);
      dispatch({
        type: SEARCH_COORD,
        payload: coord
      })
      return fetch('/api/events', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
    })
    .then((response) => {
      console.log(response);
      if(response.ok) {
        return response.json()
        .then((json) => {
          console.log("RESPONSE DATA: ", json);
          dispatch({
            type: ALL_EVENTS,
            payload: json
          });
        })
      } else {
        return response.json()
        .then((json) => {
          dispatch({
            type: ALL_EVENTS,
            payload: json
          })
        })
      }
    })
  }
}