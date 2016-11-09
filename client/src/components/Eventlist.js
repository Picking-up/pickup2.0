import React from 'react';

const Eventlist = (props) => {
  return (
    <div className="event-cards" onClick={props.eventClick}>
      <div>
        {props.sports}
      </div>

      <div>
        {props.location}
      </div>

      <div>
        {props.players}
      </div>
    </div>
  )
}

export default Eventlist;