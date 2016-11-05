export const PostEvent = (props) => {
  const location = props.location;
  const player = props.players;
  const sport = props.sports;
    return fetch('/api/events/', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify({
        location: location,
        players: player,
        sports: sport
      })
    }).then((response) => {
      if(response.ok) {
        console.log(response.ok)
      }
    })
}
