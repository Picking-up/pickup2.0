import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker } from 'react-gmaps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import SvgIcon from 'material-ui/SvgIcon';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchEventInfo } from '../actions/eventModalInfo'



class Map extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggle(e){
    e.preventDefault();
    this.setState({open: !this.state.open})
  }

  renderMarker() {
    if(!this.props.events) {
      return (
        null
      )
    }
    return this.props.events.map((event) => {
      return (
        <Marker 
          key={event.id}
          lat={event.lat}
          lng={event.lng}
          location={event.location}
          players={event.players}
          sports={event.sports}
          onClick={() => this.props.fetchEventInfo(event)}
        />

      )
    })
  }

  onMarkerClick(event) {
    console.log("MARKER EVENTINFO: ", event)
  }

  render(){
    let coords = {}
    if(!this.props.coord) {
      coords = {
         lat: 34.052235,
         lng: -118.243683
      }
    } else {
      coords = {
        lat: this.props.coord.lat,
        lng: this.props.coord.lng
      }
    }

    return(
      <div>
        <Gmaps
          className='map_canvas'
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          params={{v: '3.exp', key:'AIzaSyAB5tiiDGVCleRxo6tGkyGJjQ_BDtBHF_w'}}
          mapTypeControl={false}
          onMapCreated={this.onMapCreated}
        >
          {this.renderMarker()}
        </Gmaps>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    coord: state.coord.coord,
    events: state.event.allEvents
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEventInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);

// export default Map;
