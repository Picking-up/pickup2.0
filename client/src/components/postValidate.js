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
  }

  return errors
}

export default validate
