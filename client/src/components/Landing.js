import React, { Component } from 'react';
import { Link } from 'react-router';

class Landing extends Component {
  render() {
    return (
      <div>
        <Link to="map">go to map</Link>
      </div>
    )
  }
};

export default Landing;