const initialState = {
  msg:{}
};




export default function errorMessage(state = initialState, action){
  switch(action.type){
    case 'ERROR':
    return Object.assign({}, state, {
      msg: action.msg
    })
    default:
      return initialState
  }
}
