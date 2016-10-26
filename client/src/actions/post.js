export const PostEvent = (props) => {
  const location = props.location;
  const player = props.players;
  const sport = props.sports;
  console.log('location', location)
  console.log('player', player)
  console.log('sport', sport)
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
      console.log('in here')
      if(response.ok) {
        console.log(response.ok)
      }
    })
}

// export function PostEvent(){
//   return (dispatch,getState) => {
//     const form = getState().form;
//     const event = {
//
//     }
//   }
// }
