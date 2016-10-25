import React, { Component } from 'react';
import Map from './Map';
import Events from './Events';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="map">
          <Map />
        </div>
        <div className='events'>
          <Events />
        </div>
      </div>
    )
  }
}

export default Home;