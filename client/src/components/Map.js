import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import SvgIcon from 'material-ui/SvgIcon';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




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
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    coord: state.coord.coord
  }
}

export default connect(mapStateToProps)(Map);

// export default Map;
