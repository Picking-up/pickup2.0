import { convertAddress } from '../utils/helper';
// import $ from 'jquery'


export const ALL_EVENTS = "ALL_EVENTS";
export const SEARCH_COORD = "SEARCH_COORD";
export const EVENT_RADIUS = "EVENT_RADIUS";


export const searchEvents = (props) => {
  console.log("inside search")
  return (dispatch) => {
    convertAddress(props)
    .then((location) => {
      console.log("COORDINATE: ", location);
      dispatch({
        type: SEARCH_COORD,
        payload: location
      })
      return fetch('/api/events?location=' + JSON.stringify(location), {
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

export const getRadius = (radius, coord) => {
  return(dispatch) => {
    dispatch({
      type: EVENT_RADIUS,
      payload: radius
    })
    return fetch('/api/events/', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
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
