export const newUser = (props) => {
  const name = props.username
  const password = props.password
  const email = props.email
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
    console.log('in here');
    if(response.ok){
      console.log('it workxx')
    }
  })
}
