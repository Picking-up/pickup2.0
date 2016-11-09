export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const EVENT_DETAILS = "EVENT_DETAILS";

export const hideModal = () => {
  return {
    type: TOGGLE_MODAL,
    payload: false
  }
}

export const fetchEventInfo = (event) => {
  console.log("INSIDE fetchEventInfo", event)
  return (dispatch) => {
    dispatch({
      type: TOGGLE_MODAL,
      payload: true
    });
    dispatch({
      type: EVENT_DETAILS,
      payload: event
    })
  }
}