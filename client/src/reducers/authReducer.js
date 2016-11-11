const initialState = {
  authentication: false,
  token: undefined,
  user: {}
};


export default function auth(state = initialState, action) {
  if (!state.hydrated) {
  state = Object.assign({}, initialState, state, { hydrated: true });
}
  switch (action.type) {
    case 'AUTH_USER':
    return Object.assign({}, state, {
    authentication:true,
    token: action.token,
    user: action.user
  });
    case 'UNAUTH_USER':
        return initialState;
      default:
        console.log('this is the state from the reducer', state)
        return state;

    }
  }
