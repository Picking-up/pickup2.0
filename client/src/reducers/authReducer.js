const initialState = {
  token:undefined,
  user: {}
};


export default function auth(state = initialState, action) {
  if(!state.hydrated) {
    state = Object.assign({}, initialState, state , { hydrated:true })
  }
  switch (action.type) {
    case 'AUTH_USER':
      return Object.assign({}, state, {
      token: action.token,
      user: action.user
    });
    default:
      return state;
  }
}
