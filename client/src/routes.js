import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import routes here
import App from './components/App';
import Landing from './components/Landing';
import Map from './components/Map';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="map" component={Map} />
  </Route>

);

