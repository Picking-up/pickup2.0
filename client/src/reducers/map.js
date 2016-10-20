export default function map(state={}, action){
  switch(action.type) {
    case:'POST_SUCCESSFUL':
      return Object.assign({}, state, {
        progress: action.payload
      });
    case:'POST_FAILURE':
      return:action.error;
        default:
          return state;
  }
}
