import React, { Component } from 'react';
import { connect } from 'react-redux';

import Eventlist from './Eventlist';


class Events extends Component {

  renderList() {
    if(!this.props.events) {
      return (
        <div>NOTHING HERE</div>
      )
    }
    return this.props.events.map((event) => {
      return (
        <Eventlist
          key={event.id}
          sports={event.sports}
          location={event.location}
          players={event.players}
        />
      )
    })
  }

  render() {
    console.log("IN EVENTS: ", this.props.events);
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.event.allEvents
  }
}

export default connect(mapStateToProps)(Events);
// export default Events;