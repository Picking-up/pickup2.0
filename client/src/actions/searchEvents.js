export const ALL_EVENTS = "ALL_EVENTS"

export const searchEvents = (dispatch) => {
  return fetch('/api/events', {
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
        dispatch({
          type: ALL_EVENTS,
          payload: json
        })
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