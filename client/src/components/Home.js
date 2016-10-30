import React, { Component } from 'react';
import Map from './Map';
import Events from './Events';

class Home extends Component {

  render() {
    return (
      <div >
        <div className="col-sm-8" id="map">
          <Map />
        </div>
        <div className='col-sm-4' id="events">
          <Events />
        </div>
      </div>
    )
  }
}

export default Home;