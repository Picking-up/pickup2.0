export function signInUser(props){
  const username = props.username;
  const password = props.password;
  return (dispatch) => {
      console.log('ffd')
    return fetch('/api/signIn', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        username : username,
        password : password
      })
    })
    .then((response) => {
      if(response.ok){
        return response.json()
        .then((data) => {
          dispatch({
            type:'AUTH_USER',
            user: data.user
          });
          localStorage.setItem('token', data.token);
        })
      }
    })
  };
}

export function signOutUser(){
  return (dispatch) => {
    dispatch({
      type:'UNAUTH_USER',
    });
    localStorage.removeItem('token');
    }

}
