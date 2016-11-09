import { TOGGLE_MODAL, EVENT_DETAILS } from '../actions/eventModalInfo';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_MODAL: 
    console.log("DISPLAY", action.payload)
    return {
      ...state,
      display: action.payload
    };

    case EVENT_DETAILS: return {
      ...state,
      eventDetails: action.payload
    };

    default: return state;
  }
}