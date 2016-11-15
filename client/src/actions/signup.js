export const newUser = (props) => {
  const name = props.username
  const password = props.password
  const email = props.email
  return (dispatch) => {
  return fetch('/api/users', {
    method:'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      password: password,
      email: email
    })
  })
  .then((response) => {
    console.log('this is the response from action creator', response)
    if(response.ok){
      return response.json()
    }
  })
  .then((data) => {
    dispatch({
      type: 'AUTH_USER',
      token: data.token,
      user: data.user
    })
    localStorage.setItem('token',data.token);
    localStorage.setItem('user', data.user);
  })
}
}
