import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Eventlist from './Eventlist';
import { fetchEventInfo } from '../actions/eventModalInfo';


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
          eventClick={() => this.props.fetchEventInfo(event)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEventInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);