const initialState = {
  authentication:false,
  user:{},
  token: undefined
}


export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return {...state, authentication:true, user: action.user, token: action.toker}
    case 'UNAUTH_USER':
      return {...state, authentication:false}

      default:
        console.log('this is the state from the reducer', state)
        return state;

    }

  }
