import {browserHistory} from 'react-router';

export function signInUser(props){
  const username = props.username;
  const password = props.password;
  return (dispatch) => {
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
          console.log(data,'this is data')
          if(data != null || data != undefined){
          dispatch({
            type:'AUTH_USER',
            token: data.token,
            user: data.user
          });
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', data.user);
          browserHistory.push('/home');
        }
        })
      }else{
        return response.json()
        .then((data) =>{
        console.log('Inside the error',data)
        dispatch({
          type:'ERROR',
          msg: data.msg
        })
      }
      );
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
    localStorage.removeItem('user');
    }

}
