const validate = values => {
  const errors = {}
  if (!values.location) {
    errors.location = 'Required'
  }
  if (!values.sports) {
    errors.sports = 'Required'
  }
  if (!values.players) {
    errors.players = 'Required'
  } else if(isNaN(values.players)){
    errors.players = 'Please enter a Number of players'
  }


  return errors
}

export default validate
